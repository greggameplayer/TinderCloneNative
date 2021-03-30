import ImagePicker from 'react-native-image-crop-picker';
import CustomInputRond from "./CustomInputRond";
import {TextInput, View} from "react-native";
import {Icon} from "react-native-elements";
import React from "react";



ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
}).then(image => {
    console.log(image);
});
ImagePicker.openPicker({
    multiple: true
}).then(images => {
    console.log(images);
});
ImagePicker.openPicker({
    mediaType: "video",
}).then((video) => {
    console.log(video);
});
