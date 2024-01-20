import React, { useEffect, useState } from 'react';
import {endOfMonth, differenceInCalendarDays } from 'date-fns';

const DaysLeftInMonth = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Lấy ngày hiện tại
    const currentDate = new Date();

    // Tính toán số ngày còn lại trong tháng
    const lastDayOfMonth = endOfMonth(currentDate);
    const daysLeftInMonth = differenceInCalendarDays(lastDayOfMonth, currentDate);

    // Cập nhật state
    setDaysLeft(daysLeftInMonth);
  }, []);

  return (
    <h1>The Promotion Of This Month: {daysLeft} days left</h1>

  );
};

export default DaysLeftInMonth;
