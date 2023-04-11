import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.module.css';
import redPiece from './images/red-piece.png';
import yellowPiece from './images/yellow-piece.png';

function Cell(props) {
const { value, onClick } = props;

return (
<div className={styles.cell} onClick={onClick}>
{value === 1 && <img src={redPiece} alt="Red piece" height={40} width={40}/>}
{value === 2 && <img src={yellowPiece} alt="Yellow piece" height={40} width={40} />}
</div>
);
}

Cell.propTypes = {
value: PropTypes.number.isRequired,
onClick: PropTypes.func.isRequired,
};

export default Cell;