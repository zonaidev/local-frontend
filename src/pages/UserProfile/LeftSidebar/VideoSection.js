import React from 'react'

export default function LastVideo() {
    return (
        <div className="ui-block">
            <div className="ui-block-title block-title-bg">
                <h6 className="title">Last Videos</h6>
            </div>
            <div className="ui-block-content">

                {/* <!-- W-Latest-Video --> */}

                <ul className="widget w-last-video">
                    <li>
                        <a href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858" className="play-video play-video--small">
                            {/* <svg className="olymp-play-icon">
									<use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
								</svg> */}
                        </a>
                        <img src="img/video8.jpg" alt="video" />
                        <div className="video-content">
                            <div className="title">System of a Revenge - Hypnotize...</div>
                            <time className="published" dateTime="2017-03-24T18:18">3:25</time>
                        </div>
                        <div className="overlay"></div>
                    </li>
                    <li>
                        <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video play-video--small">
                            {/* <svg className="olymp-play-icon">
                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
								</svg> */}
                        </a>
                        <img src="img/video7.jpg" alt="video" />
                        <div className="video-content">
                            <div className="title">Green Goo - Live at Dan’s Arena</div>
                            <time className="published" dateTime="2017-03-24T18:18">5:48</time>
                        </div>
                        <div className="overlay"></div>
                    </li>
                </ul>

                {/* <!-- .. end W-Latest-Video --> */}
            </div>
        </div>

    )
}
