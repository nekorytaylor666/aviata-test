//"YYYY/MM/DD HH:MM" format regex finds all matches from it;
export const parseDate = (date: string) => {
  const matchArray = date.match(/([0-9]{1,4})/gm);
  const dateValues = matchArray?.map(value => parseInt(value));
  const year = dateValues?.[0] ?? 0;
  const month = dateValues?.[1] ?? 0;
  const day = dateValues?.[2] ?? 0;
  const hour = dateValues?.[3] ?? 0;
  const minute = dateValues?.[4] ?? 0;
  const dateObj = new Date(year, month, day, hour, minute);

  return dateObj;
};
//the format of this type of dates is DD MMM, WD HH:MM the catch is that it inputs in unicode
//and if we asume that format of date is like this all the time we can use regex to filter
//required data from it.
//We dont return Date object because we need translate the weekday and month title on every language
//So we just return the object with all values in string
export const parseDateAnyLanguage = (date: string) => {
  const dateString = decodeURIComponent(date);
  const matchArray = dateString.match(/([\p{L},\w]{2,3})/gmu);
  const day = parseInt(matchArray?.[0] ?? '0');
  const month = matchArray?.[1] ?? '0';
  const weekDay = matchArray?.[2] ?? '0';
  const hour = parseInt(matchArray?.[3] ?? '0');
  const minute = parseInt(matchArray?.[4] ?? '0');
  return {
    day,
    month,
    weekDay,
    hour,
    minute
  };
};

export const addZero = (value: number) => {
  if (value / 10 < 1) {
    return '0' + value;
  }
  return value;
};

export const getDayWeekTitle = (index: number) => {
  const dayWeeks = [
    {
      full: 'Понедельник',
      short: 'Пн'
    },
    {
      full: 'Вторник',
      short: 'Вт'
    },
    {
      full: 'Среда',
      short: 'Ср'
    },
    {
      full: 'Четверг',
      short: 'Чт'
    },
    {
      full: 'Пятница',
      short: 'Пт'
    },
    {
      full: 'Суббота',
      short: 'Сб'
    },
    {
      full: 'Воскресенье',
      short: 'Вс'
    }
  ];
  return dayWeeks[index];
};

export const getMonthTitle = (index: number) => {
  const dayWeeks = [
    {
      full: 'Январь',
      short: 'Янв'
    },
    {
      full: 'Февраль',
      short: 'Фев'
    },
    {
      full: 'Март',
      short: 'Мар'
    },
    {
      full: 'Апрель',
      short: 'Апр'
    },
    {
      full: 'Май',
      short: 'Май'
    },
    {
      full: 'Июнь',
      short: 'Июн'
    },
    {
      full: 'Июль',
      short: 'Июл'
    },
    {
      full: 'Август',
      short: 'Авг'
    },
    {
      full: 'Сентябрь',
      short: 'Сен'
    },
    {
      full: 'Октябрь',
      short: 'Окт'
    },
    {
      full: 'Ноябрь',
      short: 'Ноя'
    },
    {
      full: 'Декабрь',
      short: 'Дек'
    }
  ];
  return dayWeeks[index - 1];
};

export const secondsToTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return {
    hours,
    minutes
  };
};
