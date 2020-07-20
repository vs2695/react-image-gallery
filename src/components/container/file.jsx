import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUploadImage } from '../../actions/fileUploadAction';

const styles = require('./file.css');

class Files extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            console.log(file)
            this.setState(() => ({ file }));
        }
    }

    handleUpload = () => {
        const { file } = this.state;
        if (file && file.length !== 0) {
            const localImageUrl = window.URL.createObjectURL(file);
            console.log(localImageUrl);
            this.props.setUploadImage(localImageUrl);
        }

        else console.log('nothing to upload');

    }

    render() {
        // console.log(this.props.file.all);
        return (
            <div>
                <div className={styles.buttons}>
                    <input type="file" accept="image/*" onChange={this.handleChange} className={styles.custom_file_input} />
                    <button className={styles.custom_file_input} onClick={this.handleUpload}>Upload</button>
                </div>
                <div className="row">
                    {this.props.file.all.map(file => {
                        return (
                            <div style={{ position: 'relative', margin: '10px', left: '30px', top: '20px', bottom: '50px', border: '2px solid', borderRadius: '5px' }}>
                                <img src={file} alt="Uploaded images" height="300" width="400" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        file: state.file
    }
};

const mapDispatchToProps = {
    setUploadImage: (file) => setUploadImage(file)
}

export default connect(mapStateToProps, mapDispatchToProps)(Files);