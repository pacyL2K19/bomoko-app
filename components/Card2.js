import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableWithoutFeedback, ImageBackground, ToastAndroid } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import { nowTheme } from '../constants';

class Card2 extends React.Component {
  render() {
    const {
      navigation,
      item,
      horizontal,
      full,
      style,
      ctaColor,
      imageStyle,
      ctaRight,
      titleStyle
    } = this.props;
    const image = require("../assets/img/cooperartive.jpg")
    const imageStyles = [full ? styles.fullImage : styles.horizontalImage, imageStyle];
    const titleStyles = [styles.cardTitle, titleStyle];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow, styles.category
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => 
        { 
          navigation.navigate('DetailGroup', {

          product: `${JSON.stringify(item)}`,

         })
         //ToastAndroid.show( JSON.stringify(item), ToastAndroid.SHORT)

         }
         }>
          <Block flex style={imgContainer}  shadow >

          <ImageBackground
            source={image}
            style={imageStyles}
          >
            <Block style={ item.etat ==1 ? styles.categoryTitleS: styles.categoryTitleE}>
              <Text size={14} 
              bold 
              style={titleStyles}
              numberOfLines={1}
              color={nowTheme.COLORS.WHITE}>
              {item.nom_group}
              </Text>
              <Text size={14} 
              style={titleStyles}
              numberOfLines={1}
              color={nowTheme.COLORS.WHITE}>
            
              {item.etat == 0? "(En cours)" : "(Valide)"}
              </Text>
            </Block>
          </ImageBackground>



          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailGroup', { product: item })}>
          <Block flex space="between" style={styles.cardDescription}>
            <Block flex>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={13}
                style={titleStyles}
                color={nowTheme.COLORS.SECONDARY}
                numberOfLines={2}
              >
                {item.details}
              </Text>
              {item.date_debut ? (
                <Block flex left>
                  <Text
                    style={{ fontFamily: 'montserrat-regular', marginLeft:8 }}
                    size={13}
                    color={nowTheme.COLORS.BLACK}
                  >
                   Date debut: {new Date(parseFloat(item.date_debut)).toDateString()}
                   {/* Date debut: {item.date_debut} */}
                  </Text>
                </Block>
              ) : (
                  <Block />
                )}
              {item.date_fin ? (
                <Block flex left>
                  <Text
                    style={{ fontFamily: 'montserrat-regular', textAlign: 'left', marginLeft:8}}
                    size={13}
                    color={"#9A9A9A"}
                  >
                   Date fin: {new Date(parseFloat(item.date_fin)).toDateString()}
                  </Text>
                </Block>
              ) : (
                  <Block />
                )}
              {item.body ? (
                <Block flex left>
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={12}
                    color={nowTheme.COLORS.TEXT}
                  >
                    {item.body}
                  </Text>
                </Block>
              ) : (
                  <Block />
                )}
            </Block>
            <Block right={ctaRight ? true : false}>
              <Text
                style={styles.articleButton}
                size={13}
                muted={!ctaColor}
                color={ctaColor || nowTheme.COLORS.ACTIVE}
                bold
              >
                Contribution max: {item.somme} $
              </Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card2.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
  ctaRight: PropTypes.bool,
  titleStyle: PropTypes.any,
  textBodyStyle: PropTypes.any
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 4
  },
  cardTitle: {
    paddingHorizontal: 9,
    paddingTop: 7,
    paddingBottom: 15
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden'
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto'
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: '#8898AA',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2
  },
  articleButton: {
    fontFamily: 'montserrat-bold',
    paddingHorizontal: 9,
    paddingVertical: 7
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitleS: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitleE: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitleO: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default withNavigation(Card2);
