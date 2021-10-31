import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductItem = ({ product }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image
                    source={{ uri: 'http:' + product.api_featured_image }}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.text}>{product.name}</Text>
            </View>

            {product.price ? <Text>Price: {product.price}</Text> : null}
        </TouchableOpacity>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        width: '45%',
        margin: 5,
        paddingVertical: 10,
        borderWidth: 1,
        broderColor: '#DFDFDF',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingTop: 10,
        fontSize: 16,
    },
    image: {
        width: 160,
        height: 160,
    },
});

const aaa = {
    id: 469,
    brand: null,
    name: 'Saint Cosmetics Blush',
    price: '28.96',
    price_sign: null,
    currency: null,
    image_link:
        'https://d3t32hsnjxo7q6.cloudfront.net/i/ed6e230c6394a3c6d1904fcd02a4ae3a_ra,w158,h184_pa,w158,h184.png',
    product_link: 'https://well.ca/products/saint-cosmetics-blush_116825.html',
    website_link: 'https://well.ca',
    description:
        "Create naturally flushed looking cheeks with Saint Cosmetics' blush formulations. Designed to be worn alone or layered for more depth.Features: An ultra-blendable blush with a long-lasting formulaSilky smooth finishCreates a multi-dimensional lookMade in Canada from naturally derived ingredientsChemical Free, Vegan, Gluten Free",
    rating: null,
    category: 'powder',
    product_type: 'blush',
    tag_list: ['Natural', 'Vegan', 'Gluten Free', 'Canadian'],
    created_at: '2016-10-01T18:35:28.524Z',
    updated_at: '2017-12-23T21:08:42.899Z',
    product_api_url: 'http://makeup-api.herokuapp.com/api/v1/products/469.json',
    api_featured_image:
        '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/469/original/open-uri20171223-4-i60yfu?1514063322',
    product_colors: [
        { hex_value: '#F591A6', colour_name: 'Cheeky Cherub ' },
        { hex_value: '#E88C90', colour_name: 'Get Me To The Alter ' },
        { hex_value: '#EE8581', colour_name: 'Luv Me Gently ' },
        { hex_value: '#C7797B', colour_name: 'Passionate Plum ' },
        { hex_value: '#EC8389', colour_name: 'Peaching To The Choir ' },
    ],
};
