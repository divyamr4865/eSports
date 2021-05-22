import React from 'react'
import { Table,Tooltip } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import "./ManageDndTable.css"
import Order from '../../images/order.png'
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from '@material-ui/icons/Visibility';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
  const text = <span>prompt text</span>
const type = 'DragbleBodyRow';
const DragableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = React.useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    item: { type, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (

  <Tooltip placement="topLeft" title={text}>

    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move',}}
      {...restProps}
    />
    </Tooltip>
  );
};

const columns = [
  {
    title: 'Order',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'S.No.',
    dataIndex: 'sno',
    key: 'sno',
  },
  {
    title: 'File',
    dataIndex: 'file',
    key: 'file',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
   {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

export default class ManageDndTable extends React.Component {
  state = {
    data: [
      {
        key: '1',
        order: <span><ViewModuleIcon className="order_icon"/></span>,
        sno: 1,
        file: 'Basics.jpg',
        type:'Image',
        size:'120kb',
        action:
                          <div><VisibilityIcon className="tableeye_icon"/>
                          <CloseIcon className="tabledelete_icon"/> </div>
      },
      {
        key: '2',
        order:  <span><ViewModuleIcon className="order_icon"/></span>,
        sno: 2,
        file: 'Basics.mp4',
        type:'Video',
         size:'10mb',
        action:
                          <div><VisibilityIcon className="tableeye_icon"/>
                          <CloseIcon className="tabledelete_icon"/> </div>
      }


    ],
    value:1
  };

  components = {
    body: {
      row: DragableBodyRow,
    },
  };

  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];

    this.setState(
      update(this.state, {
        data: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        },
      }),
    );
  };

  render() {
    return (
    <div className="dnd_table">
      <DndProvider backend={HTML5Backend}>
        <Table
          columns={columns}
          dataSource={this.state.data}
          components={this.components}
          onRow={(record, index) => ({
            index,
            moveRow: this.moveRow,
          })}
        />
      </DndProvider>
      </div>
    );
  }
}


