import React from 'react';


export class FooterBar extends React.Component{ 
    render(){
        return( <footer>
            <section className="lab_social_icon_footer">
                <div className="container">
                    <div className="text-center center-block">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-3x social-fb"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-3x social-tw"></i></a>
                        <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus-square fa-3x social-gp"></i></a>
                        <a href="mailto:#"><i className="fa fa-envelope-square fa-3x social-em"></i></a>
                    </div>
                    <section>
                        <div className="footerDiv"> 
                            <p></p>
                            Created by CappyCoin, 2018
                        </div>
                    </section>  
                </div>
            </section>
        </footer>
      );
    }
}// JavaScript File
