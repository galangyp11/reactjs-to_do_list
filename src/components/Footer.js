import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {isTampilOpen: false};
    }

    handleClickOpen() {
        this.setState({isTampilOpen: true});
    }

    handleClickClose() {
        this.setState({isTampilOpen: false});
    }

    render() {
        let tampil;
        if(this.state.isTampilOpen) {
            tampil = (
                <div className="tentang">
                    <button id="button-tutup" onClick={() => {this.handleClickClose()}}> X </button>
                    <h1 className="judul-tentang">TENTANG</h1>
                    <p className="isi">Ini adalah Project Reactjs dari Progate, membuat To Do List App dengan CRUD</p>
                    <p className="nama">Pembuat, Galang yudi putra</p>
                </div>
            )
        }
        return ( 
            
            <div className="footer">
                <div className="isi-footer">
                        <button id="button-tentang" onClick={() =>{this.handleClickOpen()}}>Tentang</button>
                    <div className="tampil">
                        {tampil}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;