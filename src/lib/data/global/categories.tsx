import { AiFillClockCircle, AiOutlineNumber } from 'react-icons/ai';
import { BsFillCarFrontFill, BsRulers } from 'react-icons/bs';
import { FaRulerHorizontal, FaTemperatureLow, FaWeightHanging } from 'react-icons/fa';
import { FiRadio } from 'react-icons/fi';
import { GiCube } from 'react-icons/gi';
import { ImPower } from 'react-icons/im';
import { IoPushSharp } from 'react-icons/io5';
import { TbArrowsMinimize } from 'react-icons/tb';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { GlobalNavCategory } from 'types/conversion-types';
import getAngleCalcData from '../simple-conversion/angle';
import getAreaCalcData from '../simple-conversion/area';
import getDataStorageCalcData from '../simple-conversion/data-storage';
import getEnergyCalcData from '../simple-conversion/energy';
import getForceCalcData from '../simple-conversion/force';
import getFrequencyCalcData from '../simple-conversion/frequency';
import getFuelConsumptionCalcData from '../simple-conversion/fuel-consumption';
import getLengthCalcData from '../simple-conversion/length';
import getNumbersCalcData from '../simple-conversion/numbers';
import getPowerCalcData from '../simple-conversion/power';
import getPressureCalcData from '../simple-conversion/pressure';
import getSpeedCalcData from '../simple-conversion/speed';
import getTemperatureCalcData from '../simple-conversion/temperature';
import getTimeCalcData from '../simple-conversion/time';
import getVolumeCalcData from '../simple-conversion/volume';
import getWeightCalcData from '../simple-conversion/weight';

const getCategories = () => {

    const categories: GlobalNavCategory[] = [
        {
            id: 'common',
            label: 'categories.common.label',
            children: [
                { label: 'categories.common.length', slug: 'length', icon: <FaRulerHorizontal />, getData: getLengthCalcData },
                { label: 'categories.common.area', slug: 'area', icon: <BsRulers />, getData: getAreaCalcData },
                { label: 'categories.common.volume', slug: 'volume', icon: <GiCube />, getData: getVolumeCalcData },
                { label: 'categories.common.weight', slug: 'weight', icon: <FaWeightHanging />, getData: getWeightCalcData },
                { label: 'categories.common.speed', slug: 'speed', icon: <BsFillCarFrontFill />, getData: getSpeedCalcData },
                { label: 'categories.common.time', slug: 'time', icon: <AiFillClockCircle />, getData: getTimeCalcData }
            ]
        },
        {
            id: 'lifestyle',
            label: 'categories.lifestyle.label',
            children: [
                // { label: 'Shoe size', slug: 'shoe-size', icon: <GiConverseShoe /> },
                // { label: 'Clothing size', slug: 'clothing-size', icon: <TbTemperature /> },
                { label: 'categories.lifestyle.fuel-consumption', slug: 'fuel-consumption', icon: <BsFillCarFrontFill />, getData: getFuelConsumptionCalcData },
            ]
        },
        {
            id: 'science',
            label: 'categories.science.label',
            children: [
                { label: 'categories.science.angle', slug: 'angle', icon: <TfiRulerAlt2 />, getData: getAngleCalcData },
                { label: 'categories.science.force', slug: 'force', icon: <FaWeightHanging />, getData: getForceCalcData },
                { label: 'categories.science.pressure', slug: 'pressure', icon: <TbArrowsMinimize />, getData: getPressureCalcData },
                { label: 'categories.science.temperature', slug: 'temperature', icon: <FaTemperatureLow />, getData: getTemperatureCalcData },
                { label: 'categories.science.energy', slug: 'energy', icon: <IoPushSharp />, getData: getEnergyCalcData },
                { label: 'categories.science.frequency', slug: 'frequency', icon: <FiRadio />, getData: getFrequencyCalcData },
                { label: 'categories.science.power', slug: 'power', icon: <ImPower />, getData: getPowerCalcData },
                { label: 'categories.science.numbers', slug: 'numbers', icon: <AiOutlineNumber />, getData: getNumbersCalcData },
            ]
        },
        {
            id: 'computing',
            label: 'categories.computing.label',
            children: [
                { label: 'categories.computing.data-storage', slug: 'data-storage', icon: <GiCube />, getData: getDataStorageCalcData },
            ]
        },
    ];

    return categories;
}

export default getCategories;