import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import { connect } from 'react-redux';
import { CommonStyle } from '../../themes';
import { styles } from './styles';
import _ from 'lodash';
import { getUnsplashUsers as getUnsplashUsersAPI } from './../../service/api';
import { Color } from '../../themes';
import { userSelector } from '../../redux/selector';
import { UserActions } from '../../redux';
import { showAlert } from '../../utils';

class SearchUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      query: ''
    }
    this.nextPagination = 1;
  }

  componentDidMount() {
    this.onGetUsers();
  }

  onGetUsers = async () => {
    const { query } = this.state;

    this.setState({ isFetching: true });
    const res = await getUnsplashUsersAPI(this.nextPagination, query);
    this.setState({ isFetching: false });
    if (res.error) {
      return showAlert('Failure to fetch the users from Unsplash');
    }
    if (_.get(res, 'total_pages', 0) > this.nextPagination) {
      this.nextPagination += 1;
    } else {
      this.nextPagination = -1; // no more
    }
    if (_.get(res, 'results.length', 0)) {
      this.props.addUsers(_.get(res, 'results', []));
    }
  }

  onSearch = (query) => {
    this.nextPagination = 1;
    this.props.clearUsers();
    if (query.length >= 2) {
      this.setState({ query }, this.onGetUsers);
    }
  }

  onLoadMore = () => {
    const { isFetching } = this.state;
    if (this.nextPagination != -1 && !isFetching) {
      this.onGetUsers();
    }
  }

  onShowDetail = (item, index) => {
    this.props.navigation.navigate('UserDetailScreen', { userDetail: item });
  }

  renderItem = ({ item, index }) => {
    const uri = _.get(item, 'profile_image.medium', null);
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => this.onShowDetail(item, index)}>
        <View style={styles.itemSubContainer}>
          {uri && <Image
            source={{ uri }}
            style={styles.userImage}
          />}
          {!uri && <Image source={require('../../assets/img_placeholder.jpg')} style={styles.userImage}/>}
          <View style={styles.itemUserInfoContainer}>
            <Text style={styles.whiteBoldText}>
              {_.get(item, 'name', '')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator = () => <View style={styles.separator} />;

  renderActivity = () => {
    const { isFetching } = this.state;
    if (!isFetching) return null;
    return (
      <View style={CommonStyle.activityContainer}>
        <ActivityIndicator size="large" color={Color.white} />
      </View>
    )
  }

  render() {
    const { user } = this.props;
    return (
      <SafeAreaView style={CommonStyle.container} forceInset={{ top: 'never' }}>
        <SearchBar
          fontColor={Color.searchColor}
          iconColor={Color.searchColor}
          shadowColor={Color.shadowColor}
          cancelIconColor={Color.searchColor}
          backgroundColor={Color.primary}
          placeholder="Type 2 chars at least to start to search"
          onChangeText={this.onSearch}
          onPressCancel={() => this.onSearch('')}
          onPress={() => null}
        />
        <View style={styles.container}>
          <FlatList
            data={user.users}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `index-${index}`}
            ItemSeparatorComponent={this.renderSeparator}
            style={styles.listContainer}
            onEndReached={this.onLoadMore}
          />
        </View>
        {this.renderActivity()}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  ...userSelector(state)
});

const mapDispatchToProps = dispatch => ({
  addUsers: newUsers => dispatch(UserActions.addUsers(newUsers)),
  clearUsers: () => dispatch(UserActions.clearUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserScreen);
