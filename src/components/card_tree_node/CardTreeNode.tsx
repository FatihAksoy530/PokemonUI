import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react';
import { isConvertibleToInt } from '../../utils/helperFunctions';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./CardTreeNode.css";


const expandBtnStyle = {
  fontSize: '1rem',
}

const CardTreeNode = ({ item }) => {
  const [openNodes, setOpenNodes] = useState({});


  useEffect(() => {
    if (Object.keys(openNodes).length === 0) {
      const keysOfObject = Object.keys(item);
      const obj = {};
      keysOfObject.forEach((key) => {
        obj[key] = false;
      });
      setOpenNodes(obj);
    }
  }, []);

  const toggleExpanded = (key) => {
    setOpenNodes(prevOpenNodes => ({ ...prevOpenNodes, [key]: !prevOpenNodes[key] }));
  };

  useEffect(() => {
    console.log(openNodes)
  }, [openNodes])

  return (
    <div style={{ marginLeft: '20px' }}>
      {Object.keys(item).map((key) => {

        const value = item[key];
        console.log(key)
        return (
          <div key={key} className='tree-node-container'>
            <strong>{key}:</strong>
            {typeof value === 'object' && value !== null ? (
              <>
                <button onClick={() => { toggleExpanded(key) }}>{openNodes[key] === false ? <AddIcon style={expandBtnStyle} /> : <RemoveIcon style={expandBtnStyle} />}</button>
                <div className={`node-content ${openNodes[key] === false ? 'visually-hidden' : ''}`}>
                  <CardTreeNode item={value} />
                </div>
              </>
              ) : (
                <span> {value}</span>
              )}
            
          </div>
        );
      })}
    </div>
  );
};

const Tree = ({ data }) => {

  return <CardTreeNode item={data} />;
};

export default Tree;
