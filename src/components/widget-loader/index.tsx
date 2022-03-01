import React, { useEffect, useState } from 'react';

import { useTranslate } from '../../hooks/useTranslate';

type Props = {
    children: React.ReactNode;
    loading: boolean;
    error: boolean;
};

// Время до смены тексты
const changeTime = 2000;

const keys = ['Loading.First', 'Loading.Second', 'Loading.Third', 'Error.Timeout'];

export const WidgetLoader = ({ children, loading, error }: Props) => {
    const [index, setIndex] = useState(0);
    const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);
    const { getTextByKey } = useTranslate();

    const handleStartTimer = () => {
        const tId = setTimeout(() => {
            setIndex((value) => value + 1);
            setTimerId(null);
        }, changeTime);

        setTimerId(tId);
    };

    useEffect(() => {
        if (loading) {
            setIndex(0);
            handleStartTimer();
        }
        if (!loading && timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    }, [loading]);

    useEffect(() => {
        if (index !== 0 && index <= keys.length - 2) {
            handleStartTimer();
        }
    }, [index]);

    useEffect(() => {
        if (error) {
            setIndex(3);
        }
    }, [error]);

    if (loading || error) {
        return (
            <span>{ getTextByKey(keys[index]) }</span>
        );
    }

    return (
        <div>
            { children }
        </div>
    );
};
