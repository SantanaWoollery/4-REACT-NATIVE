import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { PARTNERS } from "../shared/partners";

/*Inside these files, set up the About and Contact components as class components,
and have them both return an empty ScrollView component,
with both the start and end tags like this: <ScrollView> </ScrollView
(you will be adding content inside the ScrollView in Task 2).
Include the necessary imports and set up both components as the default export.
 */

function Mission() {
    return (
        <Card title="Our Mission">
            <Text>
                We present a curated database of the best campsites in the vast woods
                and backcountry of the World Wide Web Wilderness. We increase access to
                adventure for the public while promoting safe and respectful use of
                resources. The expert wilderness trekkers on our staff personally verify
                each campsite to make sure that they are up to our standards. We also
                present a platform for campers to share reviews on campsites they have
                visited with each other.
            </Text>
        </Card>
    );
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS,
        };
    }

    static navigationOptions = {
        title: "About Us",
    };

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require("./images/bootstrap-logo.png") }}
                />
            );
        };

        return (
            <ScrollView>
                <Mission />
                <Card title="Community Partners">
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default About;
