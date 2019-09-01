import Mock from 'mockjs'
import banner from './banner.json'
import data from './data.json'

Mock.mock('/api/banner',{
    'list':banner
})
Mock.mock('/api/data',{
    'list':data
})
Mock.mock('/api/dataa',{
    'list':data
})