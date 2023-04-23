import {useState,createContext, useEffect } from 'react';
import './App.css';
import { Col, Row, Divider,Button, Dropdown, message, Space, Tooltip  } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Item from 'antd/es/list/Item';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import './i18n'




function App() {
  const { t, i18n } = useTranslation();



  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('ComingSoon.');
    console.log('click', e);
  };
  const items: MenuProps['items'] = [
    {
      label: 'ภาษาไทย',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'English ',
      key: '2',
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const [pos,setpos] = useState([])
  const [lineState,setlineState] = useState<boolean>(false);
  const [Position1, setPosition1] = useState<number>(1);
  const [Position2, setPosition2] = useState<number>(2);
  const [Position3, setPosition3] = useState<number>(3);
  const [Position4, setPosition4] = useState<number>(4);
  const [Position5, setPosition5] = useState<number>(5);
  const [Position6, setPosition6] = useState<number>(6);
  
  
 const right_move =()=>{
  Position1 === 1 ? setPosition1(6) :setPosition1(Position1-1)
  Position2 === 1 ? setPosition2(6) :setPosition2(Position2-1)
  Position3 === 1 ? setPosition3(6) :setPosition3(Position3-1)
  Position4 === 1 ? setPosition4(6) :setPosition4(Position4-1)
  Position5 === 1 ? setPosition5(6) :setPosition5(Position5-1)
  Position6 === 1 ? setPosition6(6) :setPosition6(Position6-1)
 }
 const left_move =()=>{
  Position1 === 6 ? setPosition1(1) :setPosition1(Position1+1)
  Position2 === 6 ? setPosition2(1) :setPosition2(Position2+1)
  Position3 === 6 ? setPosition3(1) :setPosition3(Position3+1)
  Position4 === 6 ? setPosition4(1) :setPosition4(Position4+1)
  Position5 === 6 ? setPosition5(1) :setPosition5(Position5+1)
  Position6 === 6 ? setPosition6(1) :setPosition6(Position6+1)
 }
 const Move_line =()=>{
  lineState === false ? setlineState(true) :setlineState(false)
  
 }
 const Random =()=>{
  
 }

  return (
    <div className="App">
        <h1>{t('Layout&Style')}</h1>
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
        {t('Language')}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>

        <div>
      <Row>
      <Col span={8}>
          <button className='btn_left' onClick={left_move}>
              <div className='triangle1'></div>
          </button>
      </Col>
      <Col className='MovePosition' span={8} >
            <button className='btn_MovePosition' onClick={Move_line}>
                <div className='triangle3'></div>
                <div className='triangle4'></div>
            </button>
      </Col>
      <Col span={8}>
            <button className='btn_right' onClick={right_move}>
                <div className='triangle2'></div>
            </button>
      </Col>
    </Row>
    <Row>
      <Col span={8} className='Textbox_left'>
          <div className='Textbox1'>
              {t('MoveShape')}
          </div>
      </Col>
      <Col className='MovePosition' span={8} >
          <div className='Textbox3'>
              {t('MovePosition')}
          </div>
      </Col>
      <Col span={8} className='Textbox_right'>
            <div className='Textbox2'>
            {t('MovePosition')}
            </div>
      </Col>
    </Row>
      
      
    <Divider />
    
    <Row className='line_1'>
      <Col span={8} className='col_1'>
            <button className="btn_fomat1" onClick={Random}>
            <div className={
             Position1 === 1 ? "Format1" : 
             Position1 === 2 ? "Format2" : 
             Position1 === 3 ? "Format3" : 
             Position1 === 4 ? "Format4" : 
             Position1 === 5 ? "Format5" : "Format6" 
            }>   
            </div>
            </button>
      </Col>
      <Col span={8} className='col_2'>
      <button className="btn_fomat2" onClick={Random}>
            <div className={
             Position2 === 1 ? "Format1" : 
             Position2 === 2 ? "Format2" : 
             Position2 === 3 ? "Format3" : 
             Position2 === 4 ? "Format4" : 
             Position2 === 5 ? "Format5" : "Format6" 
            }>   
            </div>
            </button>
      </Col>
      <Col span={8} className='col_3'>
      <button className="btn_fomat3" onClick={Random}>
            <div className={
             Position3 === 1 ? "Format1" : 
             Position3 === 2 ? "Format2" : 
             Position3 === 3 ? "Format3" : 
             Position3 === 4 ? "Format4" : 
             Position3 === 5 ? "Format5" : "Format6" 
            }>   
            </div>
            </button>
      </Col>
    </Row>
    <Row className='Line_2'>
      <Col span={8} className='col_4' >
      <button className="btn_fomat4" onClick={Random}>
            <div className={
             Position6 === 1 ? "Format1" : 
             Position6 === 2 ? "Format2" : 
             Position6 === 3 ? "Format3" : 
             Position6 === 4 ? "Format4" : 
             Position6 === 5 ? "Format5" : "Format6" 
            }>   
            </div>
            </button>
      </Col>
      <Col span={8} className='col_5'>
      <button className="btn_fomat5" onClick={Random}>
            <div className={
             Position5 === 1 ? "Format1" : 
             Position5 === 2 ? "Format2" : 
             Position5 === 3 ? "Format3" : 
             Position5 === 4 ? "Format4" : 
             Position5 === 5 ? "Format5" : "Format6" 
            }>   
            </div>
            </button>
      </Col>
      <Col span={8} className='col_6'>
      <button className="btn_fomat6" onClick={Random}>
            <div className={
             Position4 === 1 ? "Format1" : 
             Position4 === 2 ? "Format2" : 
             Position4 === 3 ? "Format3" : 
             Position4 === 4 ? "Format4" : 
             Position4 === 5 ? "Format5" : "Format6" 
            }>   
            </div>
            </button>
      </Col>
    </Row>
        </div>
        <div>

        </div>
    </div>
  );
}

export default App;
