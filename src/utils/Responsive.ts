import { Dimensions, PixelRatio } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

export function widthPercentageToDP(widthPercent: number) {
    const width = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * width / 100);
};

export function heightPercentageToDP(heightPercent: number) {
    const height = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * height / 100);
};

