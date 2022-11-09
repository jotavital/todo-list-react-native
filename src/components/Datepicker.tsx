import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DatePicker from "react-native-date-picker";

interface Props {
    date: Date;
    handleSetDate: any;
}

const Datepicker: React.FC<Props> = ({date, handleSetDate}) => {

    return (
        <DatePicker
            locale="pt"
            minimumDate={new Date()}
            date={date}
            onDateChange={handleSetDate}
            timeZoneOffsetInMinutes={0}
            style={styles.datepicker}
        />
    );
};

export default Datepicker;

const styles = StyleSheet.create({
    datepicker: {
        width: undefined
    },
});