import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Slider } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './index.style';
import { ENTRIES1 } from './entries';

export default class example extends Component {

    constructor(props) {
     super(props)
     this.state = { acc: 18, speed: 60, other: 95}
    }
    getVal(val){
    console.warn(val);
    }

    getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                  key={`carousel-entry-${index}`}
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    get example1 () {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.6}
              enableMomentum={false}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={false}
              snapOnAndroid={true}
              removeClippedSubviews={false}
            >
                { this.getSlides(ENTRIES1) }
            </Carousel>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.colorsContainer}>
                    <View style={styles.color2} />
                </View>
                <Text style={styles.title}>Speed</Text>
                <Slider
                 style={{ width: 300 }}
                 step={1}
                 minimumValue={1}
                 maximumValue={100}
                 value={this.state.speed}
                 onValueChange={val => this.setState({ speed: val })}
                 onSlidingComplete={ val => this.getVal(val)}
                />
                <Text style={styles.welcome}>
                  {this.state.speed}
                </Text>
              <Text style={styles.title}>Acceleration</Text>
                <Slider
                 style={{ width: 300 }}
                 step={1}
                 minimumValue={1}
                 maximumValue={100}
                 value={this.state.acc}
                 onValueChange={val => this.setState({ acc: val })}
                 onSlidingComplete={ val => this.getVal(val)}
                />
                <Text style={styles.welcome}>
                  {this.state.acc}
                </Text>
                <StatusBar
                  translucent={true}
                  backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  barStyle={'light-content'}
                />
                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                >
                    <Text style={styles.title}>Carousel?</Text>
                    { this.example1 }
                </ScrollView>
            </View>
        );
    }
}
