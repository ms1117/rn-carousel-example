import React, { Component } from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { SliderEntry } from '../../components';
import { Metric, Color, CommonStyle } from '../../themes';

export class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderCarouselItem = ({ item, index }) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
      />
    );
  }

  render() {
    const { selectedUser, firstIndex, showCarousel, onClose } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={showCarousel}
        onRequestClose={() => console.info('modal has been closed.')}
      >
        <SafeAreaView style={CommonStyle.container}>
          <View style={styles.carouselHeader}>
            <TouchableOpacity style={styles.carouselCloseContainer} onPress={onClose}>
              <MaterialIcons name="close" size={30} color={Color.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              data={selectedUser.images}
              renderItem={this.renderCarouselItem}
              sliderWidth={Metric.carouselSliderWidth}
              itemWidth={Metric.carouselItemWidth}
              firstItem={firstIndex}
              initialNumToRender={selectedUser.images.length}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
              activeSlideOffset={100}
              loop
            />
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}