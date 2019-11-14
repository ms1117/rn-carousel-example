import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import _ from 'lodash';
import { View, Image, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import { CommonStyle } from '../../themes';
import { Header } from '../../components';
import { callAPI } from '../../service/api';
import { selectedUserSelector } from '../../redux/selector';
import { SelectedUserActions } from '../../redux';
import { ImageCarousel } from './ImageCarousel';
import { showAlert } from '../../utils';

class UserDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showCarousel: false,
      firstCarousel: 0
    }
    this.nextPagination = 1;
    this.pageSize = 10;
  }

  componentDidMount() {
    this.onGetUserImages();
  }

  onGetUserImages = async () => {
    const { navigation } = this.props;
    const photoLink = _.get(navigation, 'state.params.userDetail.links.photos', null);
    if (photoLink) {
      this.setState({ isFetching: true });
      const res = await callAPI(photoLink, this.nextPagination, this.pageSize);
      this.setState({ isFetching: false });
      if (res.error) {
        showAlert('Failure to fetch the photos from this user. Please try again later');
      } else {
        if (res.length < this.pageSize) {
          this.nextPagination = -1; // no more
        } else {
          this.nextPagination += 1;
        }
        this.props.addImages(res);
      }
    }
  }

  onLoadMore = () => {
    const { isFetching } = this.state;
    if (this.nextPagination != -1 && !isFetching) {
      this.onGetUserImages();
    }
  }

  onBack = () => {
    this.props.clearImages();
    this.props.navigation.goBack();
  }

  onShowDetail = (item, index) => {
    this.setState({ firstCarousel: index, showCarousel: true });
  }

  onCloseCarousel = () => {
    this.setState({ showCarousel: false });
  }

  renderUserInfo = () => {
    const { navigation } = this.props;
    const name = _.get(navigation, 'state.params.userDetail.name', '');
    const userName = _.get(navigation, 'state.params.userDetail.username', '');
    const userPhoto = _.get(navigation, 'state.params.userDetail.profile_image.large', null);

    return (
      <View style={styles.userInfoContainer}>
        {userPhoto && <Image
          source={{ uri: userPhoto }}
          style={styles.userImage}
        />}
        {!userPhoto && <Image source={require('../../assets/img_placeholder.jpg')} style={styles.userImage}/>}
        <View style={styles.userSubInfoContainer}>
          <Text style={styles.whiteBoldText}>
            {name}
          </Text>
          <Text style={styles.whiteText}>
            {userName}
          </Text>
        </View>
      </View>
    );
  }

  renderSeparator = () => <View style={styles.separator} />;

  renderUserImage = ({ item, index }) => {
    const uri = _.get(item, 'urls.small', null);
    if (!uri) {
      return <Image source={require('../../assets/img_placeholder.jpg')} style={styles.userImageContainer}/>;
    }
    return (
      <TouchableOpacity style={styles.userImageContainer} onPress={() => this.onShowDetail(item, index)}>
        <Image
          style={styles.userImageItem}
          source={{ uri }}
        />
      </TouchableOpacity>
    );
  }

  renderUserImages = () => {
    const { photos } = this.state;
    const { navigation, selectedUser } = this.props;
    const images = _.get(navigation, 'state.params.userDetail')
    return (
      <View style={styles.userImagesContainer}>
        <Text style={styles.whiteBigBoldText}>
          User Images
        </Text>
        <FlatList
          data={selectedUser.images}
          numColumns={2}
          renderItem={this.renderUserImage}
          keyExtractor={(item, index) => `index-${index}`}
          ItemSeparatorComponent={this.renderSeparator}
          style={styles.imagesList}
          onEndReached={this.onLoadMore}
        />
      </View>
    );
  };

  render() {
    const { showCarousel, firstCarousel } = this.state;
    return (
      <SafeAreaView style={CommonStyle.container}>
        <Header title="User Details" onBack={this.onBack} />
        <View style={styles.mainContainer}>
          {this.renderUserInfo()}
          {this.renderUserImages()}
        </View>
        <ImageCarousel
          {...this.props}
          firstIndex={firstCarousel}
          showCarousel={showCarousel}
          onClose={this.onCloseCarousel}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  ...selectedUserSelector(state)
});

const mapDispatchToProps = dispatch => ({
  addImages: images => dispatch(SelectedUserActions.addUserImages(images)),
  clearImages: () => dispatch(SelectedUserActions.clearUserImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailScreen);
