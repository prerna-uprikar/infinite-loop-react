import styles from './Main.module.css';

function Main() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.whatWeDoHeading}>What We Do</h1>
                <p className={styles.whatweDoPara}>This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect.
                    This layout is what you can modify and use for your websites. <br />
                    Please spread a word to your friends about our website. Thank you for supporting us.
                    If you have any question, you can contact us or chat <br /> with us on our
                    <a href='/'>Tooplate Facebook page</a>.
                </p>

                <div className={styles.CardSection}>
                    <div className={styles.card}>
                        <div className={styles.cardInfoSection}>
                            <p className={styles.CardHeading}>
                                Market Analysis
                            </p>
                            <p className={styles.CardPara}>
                                raesent sed pharetra lorem, blandit convallis mi. <br /> Aenean ornare elit ac metus lacinia, sed iaculis nibh <br /> semper. Pellentesque est urna.
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInfoSection}>
                            <p className={styles.CardHeading}>
                                Fast Support
                            </p>
                            <p className={styles.CardPara}>
                                Credit goes to Pexels website for all images used in this   <br /> template. Cras condimentum mi et sapien dignissim  <br />  luctus.                            </p>
                        </div>
                    </div>
                </div>


                <div className={styles.CardSection}>
                    <div className={styles.card}>
                        <div className={styles.cardInfoSection}>
                            <p className={styles.CardHeading}>
                                Top Security
                            </p>
                            <p className={styles.CardPara}>
                                You have no authority to
                                post this template as a ZIP file on your template collection websites. You can use this  <br />  template for your commercial websites.
                            </p>
                            <div className={styles.Btn}>
                                <buton className={styles.Detilsbtn}>Learn More</buton>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInfoSection}>
                            <p className={styles.CardHeading}>
                                Social Work
                            </p>
                            <p className={styles.CardPara}>
                                You can change Font Awesome icons by either fas or far <br /> in the HTML codes. For Examples: <br />
                                <em> <i class="fas fa-users" /> <i class="far fa-chart-bar" /></em>
                            </p>

                            <div className={styles.Btn}>
                                <buton className={styles.Detilsbtn}>Details</buton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.testimonilSection}>
                <p className={styles.Testimonials}>Testimonials</p>
                <p className={styles.TestimonialsPara}>Nulla dictum sem non eros euismod, eu placerat tortor lobortis. Suspendisse id velit eu libero <br /> pellentesque interdum. Etiam quis congue eros.</p>

                <div className={styles.testimonialscroll}>
                    <div className={styles.testimonialSec}>
                        <div className={styles.imagetesti}>
                            <img src='https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-01.jpg' className={styles.testiImage} />
                        </div>
                        <p>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</p>
                    </div>

                    <div className={styles.testimonialSec}>
                        <div className={styles.imagetesti}>
                            <img src='https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-02.jpg' className={styles.testiImage} />
                        </div>
                        <p>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</p>
                    </div>

                    <div className={styles.testimonialSec}>
                        <div className={styles.imagetesti}>
                            <img src='https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-03.jpg' className={styles.testiImage} />
                        </div>
                        <p>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</p>
                    </div>

                    <div className={styles.testimonialSec}>
                        <div className={styles.imagetesti}>
                            <img src='https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-04.jpg' className={styles.testiImage} />
                        </div>
                        <p>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</p>
                    </div>

                    <div className={styles.testimonialSec}>
                        <div className={styles.imagetesti}>
                            <img src='https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-02.jpg' className={styles.testiImage} />
                        </div>
                        <p>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</p>
                    </div>
                    <div className={styles.testimonialSec}>
                        <div className={styles.imagetesti}>
                            <img src='https://www.tooplate.com/templates/2117_infinite_loop/img/testimonial-img-03.jpg' className={styles.testiImage} />
                        </div>
                        <p>This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.</p>
                    </div>
                </div>
            </div>

            <div className={styles.Gallery}>
                <p className={styles.GalleryHeading}>Gallery</p>
                <p className={styles.GalleryPara}>Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia,  <br /> sed iaculis nibh semper. Pellentesque est urna, lobortis eu arcu a, aliquet tristique urna.</p>
            </div>
        </>
    );
}

export default Main;
