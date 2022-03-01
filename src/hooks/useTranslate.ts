const messages: Record<string, string> = {
    'Loading.First': 'Виджет грузится',
    'Loading.Second': 'Виджет ещё грузится',
    'Loading.Third': 'Загрузка идёт дольше чем обычно. Пожалуйста, подождите',
    'Error.Timeout': 'Ошибка при загрузке. Пожалуйста -- обновите окно',
    'Success.LoadingFinished': 'Виджет загружен!',
};

// если messages тянутся с редакса, то можно их получить тут с помощью useSelector
export const useTranslate = () => ({
    getTextByKey: (key: string) => messages[key],
});
