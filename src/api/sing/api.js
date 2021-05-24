import { getInstance } from "../http"

export const getChartList = async (chartType) => {
    const res = await getInstance().get('/v1/chart/' + chartType);
    return res.data;
}

export const getChartDetail = async (id) => {
    const res = await getInstance().get('/v1/chart/detail/' + id);
    return res.data;
}

