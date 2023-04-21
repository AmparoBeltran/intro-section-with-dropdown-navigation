import { HeroStyled } from "./styles/Hero.styled";

export default function Hero() {
    return (
        <HeroStyled>
            <div className="cta">
                <h1>Make remote work</h1>
                <p className="copy">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
                <div className="clients">
                    <img src="/images/client-databiz.svg" />
                    <img src="/images/client-audiophile.svg" />
                    <img src="/images/client-meet.svg" />
                    <img src="/images/client-maker.svg" />

                </div>
            </div>
            <div className="hero-desktop-img">
                <img className="desktop-img" src="/images/image-hero-desktop.png" />
            </div>
            <div className="hero-mobile-img">
                <img className="mobile-img" src="/images/image-hero-mobile.png" />
            </div>
        </HeroStyled>
    )
}