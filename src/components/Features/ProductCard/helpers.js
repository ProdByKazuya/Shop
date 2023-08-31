export const getProductMoreList = (args) => {
    const {
        t,
        handleDelete
    } = args
    return [
        {
            title: t('Изменить'),
            onClick: () => {}
        },
        {
            title: t('Удалить'),
            onClick: handleDelete
        },        {
            title: t('Заблокировать'),
            onClick: () => {}
        },
    ]
}