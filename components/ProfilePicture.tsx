import React from "react";
import {View} from "./Themed";
import {Avatar, Layout} from "@ui-kitten/components";

export default function ProfilePicture({size, image}: {size?: string | undefined, image: any}) {
    return (
      <View>
          <Layout level='1'>
              <Avatar size={size} shape={"round"} source={image}/>
          </Layout>
      </View>
    );
}
