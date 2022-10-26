import React, { useState } from "react";
import DatePicker from "react-native-date-picker";

interface Props {}

const Datepicker: React.FC<Props> = () => {
    const [date, setDate] = useState(new Date());
    const handleSetDate = (value: Date) => {
        setDate(value);
    };

    return (
        <DatePicker
            locale="pt"
            minimumDate={new Date()}
            date={date}
            onDateChange={handleSetDate}
            timeZoneOffsetInMinutes={0}
        />
    );
};

export default Datepicker;
