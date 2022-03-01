import React, { useEffect, useState } from 'react';
import { SomeWidget } from './components/some-widget';
import { WidgetLoader } from './components/widget-loader';

/*
TODO
    Не понятные моменты
    1) Не совсем понял зачем тут использовтаь i18n
    2) Откуда будут браться messages(наверно redux, либо можно запрос написать в хуке useTranslate)
    3) Что отображать если при получении переводов ошибка(если с сервера тянутся)
    4) Всегда ли перед загрузкой виджетов переводы уже будут
        если нет что отображать вместо переводов
    5) В каком случае отображать текст Success.LoadingFinished ?
        если виджет уже загружен, то зачем нам отображать, что он загружен,
        если мы его можем сразу показать?
*/

export const App = () => {
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // TODO компонент загрузился
        setTimeout(() => {
            setLoad(false);
        }, 3000);

        // TODO Запрос виджета завершился с ошибкой
        // setTimeout(() => {
        //     setLoad(false);
        //     setError(true);
        // }, 6000);
    }, []);

    return (
        <React.Fragment>
            <WidgetLoader error={ error } loading={ load }>
                <SomeWidget />
            </WidgetLoader>
            <br />
            <WidgetLoader error={ false } loading={ true }>
                <SomeWidget />
            </WidgetLoader>
        </React.Fragment>
    );
};
