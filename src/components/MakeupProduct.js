import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import nav_ids from '../navigation/nav_ids';
import { MakeupActions } from '../redux';

/** @param {{product: import('./ProductItem').MakeupItem}} params  */
const MakeupProduct = ({ product }) => {
    const dispatch = useDispatch();
    console.log(product);
    const rating = product.rating ? Math.round(product.rating) : 1;
    const ratingStars = new Array(rating).fill(1);
    const starsColor = rating > 4 ? 'green' : rating > 2 ? 'orange' : 'red';
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image
                source={{ uri: 'http:' + product.api_featured_image }}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.productTitle}>{product.name}</Text>
            <View style={styles.productContainer}>
                <View style={styles.ratingContainer}>
                    {ratingStars.map((itm, indx) => (
                        <Text style={styles.iconContainer} key={indx}>
                            <Icon
                                name="star"
                                size={30}
                                color={starsColor}
                                style={styles.starsIcon}
                            />
                        </Text>
                    ))}
                </View>
                <Text>
                    Tags:{' '}
                    {product.tag_list.length > 0
                        ? product.tag_list.join(', ')
                        : 'none'}
                </Text>
                <Text style={{ textAlign: 'justify' }}>
                    Description: {product.description.replace(/\s+/g, ' ')}
                </Text>
            </View>
            <TouchableOpacity onPress={() => {dispatch(MakeupActions.addToCart(product))}} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to cart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default MakeupProduct;

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    imageContainer: {
        paddingTop: 10,
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: 300,
    },
    productTitle: {
        fontSize: 20,
        color: '#A3A9F1',
        textAlign: 'center',
    },
    productContainer: {
        alignItems: 'flex-start',
        width: '100%',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    starsIcon: {
        shadowOpacity: 2,
        textShadowRadius: 5,
        textShadowOffset: { width: 3, height: 3 },
    },
    addButton: {
        width: 150,
        paddingVertical: 15,
        borderRadius: 5,
        borderBottomRightRadius: 0,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 20,
        letterSpacing: 1.2,
    },
});
