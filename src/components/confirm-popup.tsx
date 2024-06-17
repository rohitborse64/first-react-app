import React from 'react';

class ConfirmPopup extends React.Component {
  handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // Code to delete the item
      console.log('Item deleted!');
    } else {
      console.log('Deletion cancelled!');
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>Delete Item ConfirmPopup</button>
      </div>
    );
  }
}

export default ConfirmPopup;