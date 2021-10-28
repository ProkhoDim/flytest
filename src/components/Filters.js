// @ts-check
import React, { useCallback, useMemo, useState } from 'react';
import {
    FlatList,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import queryData from '../services/queryData';
import Checkbox from './common/Checkbox';
import FiltersList from './common/FiltersList';

const Comp = ({ filterName, checked, onPress }) => {
    console.log('update', Date.now());
    return (
        <View style={styles.itemContainer}>
            <Checkbox
                onPress={() => onPress(filterName)}
                checked={checked}
                size={20}
            />
            <Text style={styles.itemName}>{filterName}</Text>
        </View>
    );
};

const MemoizedComp = React.memo(
    Comp,
    (prev, next) => prev.checked === next.checked
);

/**
 * @type {import('react-native-navigation').NavigationFunctionComponent}
 */
const Filters = () => {
    const [checkedTags, setCheckedTags] = useState([]);
    const [checkedBrands, setCheckedBrands] = useState([]);
    // const [currentPressed, setCurrentPressed] = useState('');
    // const checkboxPress = useCallback(
    //     () =>
    //         setChecked(prev =>
    //             prev.includes(currentPressed)
    //                 ? prev.filter(element => currentPressed !== element)
    //                 : [...prev, currentPressed]
    //         ),
    //     [currentPressed]
    // );

    const checkboxPress = currentPressed =>
        setCheckedTags(prev =>
            prev.includes(currentPressed)
                ? prev.filter(element => currentPressed !== element)
                : [...prev, currentPressed]
        );
    console.log('start ===============================================');
    /** @param {import('react-native').ListRenderItemInfo} params */
    const renderTags = params => {
        const checkedItem = checkedTags.includes(params.item);
        // console.log(item);
        return (
            <MemoizedComp
                filterName={params.item}
                onPress={checkboxPress}
                checked={checkedItem}
            />
        );
    };

    const clearAllPressed = key => {};

    /** @param {String} title */
    const renderHeader = title => {
        return (
            <View>
                <Text style={styles.sectionTitle}>{title}</Text>
                <TouchableOpacity onPress={() => clearAllPressed(title)}>
                    <Text>Clear All</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.wrap}>
            {/* <FlatList
                style={{ flexGrow: 1 }}
                data={queryData[0].data}
                keyExtractor={(item, index) => item + index}
                renderItem={renderTags}
                // @ts-ignore
                ListHeaderComponent={renderHeader(queryData[0].title)}
            /> */}
            <FiltersList
                headerTitle={queryData[0].title}
                itemsList={queryData[0].data}
            />
            <FiltersList
                headerTitle={queryData[1].title}
                itemsList={queryData[1].data}
            />
        </View>
    );
};

// class Filters extends React.Component {
//     state = {
//         checked: [],
//     };

//     checkboxPress = currentPressed =>
//         this.setState(({ checked }) =>
//             checked.includes(currentPressed)
//                 ? {
//                       checked: checked.filter(
//                           element => currentPressed !== element
//                       ),
//                   }
//                 : { checked: [...checked, currentPressed] }
//         );

//     renderCheckbox({ item }) {
//         const checkedItem = this.state.checked.includes(item);
//         // console.log(item);
//         // return (
//         //     <View style={styles.itemContainer}>
//         //         <Checkbox onPress={onPress} checked={checkedItem} size={20} />
//         //         <Text style={styles.itemName}>{item}</Text>
//         //     </View>
//         // );
//         return (
//             <MemoizedComp
//                 filterName={item}
//                 onPress={this.checkboxPress}
//                 checked={checkedItem}
//             />
//         );
//     }
//     renderHeader = ({ section: { title } }) => {
//         return (
//             <View>
//                 <Text style={styles.sectionTitle}>{title}</Text>
//             </View>
//         );
//     };
//     render() {
//         return (
//             <View style={styles.wrap}>
//                 <SectionList
//                     sections={queryData}
//                     keyExtractor={(item, index) => item + index}
//                     renderItem={item => this.renderCheckbox(item)}
//                     // @ts-ignore
//                     renderSectionHeader={this.renderHeader}
//                 />
//             </View>
//         );
//     }
// }

export default Filters;

const styles = StyleSheet.create({
    wrap: {
        // flex: 1,
        backgroundColor: '#FFFF90',
    },
    itemName: {
        fontSize: 16,
        textTransform: 'capitalize',
    },
    sectionTitle: {
        fontSize: 20,
        textTransform: 'capitalize',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
