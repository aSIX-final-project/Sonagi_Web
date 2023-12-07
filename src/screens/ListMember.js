import React from 'react';
import './ListMember.css';
import joinsonagi from '../assets/images/joinsonagi.png'
import axios from 'axios';

class ListMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      showModal: false,
      modalImage: null,
      modalInfo: null,
      restaurant: null,
    };
  }

  componentDidMount() {
    axios.get('http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/donation/findAll')
      .then(response => {
        this.setState({ members: response.data.slice(0, 9) });
      })
      .catch(error => {
        console.error(error);
      });
  }

  openModal = (src, member) => {
    axios.post(`http://port-0-sonagi-app-project-1drvf2lloka4swg.sel5.cloudtype.app/boot/member/findById`, {
      id: member.donatedReceiver
    })

      .then(response => {
        console.log(response);
        this.setState({
          restaurant: response.data[0],
        });

      })
      .catch(error => {
        console.error(error);
      });

    this.setState({
      showModal: true,
      modalImage: src,
      modalInfo: member,
    }, () => {
      document.body.style.overflow = 'hidden';
    });

  }

  closeModal = () => {
    this.setState({
      showModal: false,
      modalImage: null,
    }, () => {
      document.body.style.overflow = 'unset';
    });
  }


  render() {
    return (
      <div id="ListMember">
        <img src={joinsonagi} alt="joinsonagi" style={{ width: '19%', marginLeft: '3.8%', marginTop: '1.5%', marginBottom: '1%' }} />
        <div className="gallery">
          {this.state.members.map((member, index) => (
            <div className="gallery-tile" key={index} onClick={() => this.openModal(member.foodImage, member)}>
              <div className="picture-info">
              </div>
              <img src={member.foodImage} alt={member.foodTitle} />
            </div>
          ))}
        </div>
        {this.state.showModal && this.state.modalInfo &&
          <div className="lMmodal">
            <div className="lMmodal-content">
              <div className='lMclosediv'>
                <span className="lMclose" onClick={this.closeModal}>&times;</span>
              </div>
              <img src={this.state.modalImage} className='lMmodal-image' />
              <table className="lMinfo-table">
                <tr className="lMinfo-table-row1">
                  <td>상호명</td>
                  <td>기부 양</td>
                  <td>기부 금액</td>
                  <td>기부 받은 업체</td>
                </tr>
                <tr>

                  <td>{this.state.modalInfo.foodTitle}</td>
                  <td>{this.state.modalInfo.donatedAmount}</td>
                  <td>{this.state.modalInfo.donatedPrice}</td>
                  <td>{this.state.restaurant ? this.state.restaurant.adName : 'Loading...'}</td>

                </tr>
              </table>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default ListMember;
