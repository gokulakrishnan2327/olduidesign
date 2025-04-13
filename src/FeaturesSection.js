import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      img: "https://s3-alpha-sig.figma.com/img/1289/b97d/4f3b9c934193f8486a3cfe29fca24a7b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m6XhBrLwwPnXE0pGpxdS78RCzw~8BVc5idfLqHKnznYn5~nIAqhln-8o67dXtU3wOu3O470tqsOj4rZ-STKkgoTlIw~ZuSiJbCeMtESb33-mZ9HCtVDIodX6LVE-AkH33qnohrJPoTLlAjhTaIFrqqSI90bY9wiMq7wplRS77f4ELrb9y3pitGefMjaXJO1~tc0QBvV3Q8svbT68ed5ZqmTwrvoH5PC5Ipbr3jGdAP19-43AbrCpl0b3AirZscYpHICILc9Hd0yvKkUyzmvesvjEdEz~6gEnyumoRWwssFeMN6~8Gg9wQgcqTDl0EQWqXJjTKqt-XYJBwRpeEuA51A__",
      title: "Smart Budgeting",
      description: "Set and track your budgets with intelligent forecasting and real-time notifications."
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/2890/84ee/97cec2c91998fb9c14a657167e362f08?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TCv3KbMRcsu7RqF0Im4Cf1j~C1iceA6RaoeY9HiN4q~zgL6arT49pm~NRevkNU8LsQwI~n~khcQFBLcq15zYRtEDIS~YgPEMkfWwud603ol7QvbyvEag4rudFtQJtQEDW3rMuELTWKJXC~Vubb9v66RU~Pg4uglfw2wqyn6Tv9do1gPyTRQGbKQ1oNxz2EI2xPI8VZYnDuRZzTl3JjeknK3p3kmfWHmJ9AsLCEVwtzjF~nfV7lLyJxg1y2o413gUatliwD5HK7dY2Yq6agwovx3ovEwKodfvvTbZOgRZ2g2C9veyFuhzl~LGMZ2W0UU6dGqz4ydJEuCYFymr8Cd2vA__",
      title: "Transaction Tracking",
      description: "Automatically categorize and monitor all your financial transactions across accounts."
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/1df7/1c73/68ae6574a83a0237358ce69600f270cd?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MEP2Yj8o40W4ylJWj19hObKV9rnSxIYoiqMnBnUBvu1P8-g-2svq6vQU4eTk458Ni-TI7~4QzFHvKAzJ~grKcNjzajx9i14Fdq0PmikEJN9QwHWYq9bErmotf~cnWzeYKpt2t-ifdsxmhAVVIfHfDDQANSsJ0Wa-ihi4y8uICamieAmzaWDTS1MX~26RZwfaBzJj1OLepEctrMbC4jxO4W43Zmwc1UV8M7SI7ZS0BhDisBbIwVArwtNUR~nu8Y-RbDBFrQI1yI6rXVBgSUb8J90F0lE2gnKVeB8ng~URQ0n49MhsEWvAPweN6xoqPLtbYl9aCTdj5SqAK67z9btAog__",
      title: "Financial Insights",
      description: "Gain valuable insights with AI-powered analysis of your spending and saving patterns."
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/b279/dc63/55efbf4f2dd7141ff590393e3b7178ee?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T83EnbRhSCV9UcbvbhoQhghdpLrdiNKdT-071EesDQkZZPciW4UzngZAy6-WwlAbvaydmlM~LKnR2IgVZDZKuGC2MuYDemFCGYJtUVYs2L7FnP8wdIrZkNtjDQ3wSS9nFZzQZHwJcrooSvdhB1pfGxsx1B4E50pOQlUlij45OZFgoGszs3SHBJZtrPmxU0yhgPQGLZPVfoqc7pOzRAuqgFJhroqEygrtdcan6Dk6ATrWdeYwYvlzGBx0i0PimAvXybkBjjRBkMpzzuHSWaiYFGSFX57anx8jxmZTmaUIkWEQjTkywJ-Mmn8CzyqQIqlZ0DWgnnubYFFa9Ws8XYtyhg__",
      title: "Secure Banking",
      description: "Bank-level security ensures your financial data is protected at all times."
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/ff40/6805/6e0e8b8942b20abd85bb8a3e3a2109c6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qDrcrIcb9HHu9UwdsyYTd1O1BA2Gk9teqZ-FISUWoO0YAp2447tivOxsD8UI8OkFrDvhN6xn0lGlR~MF7TE01teXFUnVJink8a9xCS1uZDlWgYETBhhYVcsssr34ERE8bG7i1XeUEqBlsqJ6xSVdwJ1UPrF8wHSov9~Wo4F1pg70vCaT8kCJXHlsPWU2AT9OpdA~StVXnX2bcvCLz45kC4DN4C4j06uzx6~9Bw9I15yB1PBjYkYyuIz7hLOQhbyhjoJZy~ibRyjU3kBkbyTybOCtyQl~6GBZO~xMgS5pcDeWCjCucJvvy798Un0nTGC9Setb1LSAir4R-2WXc7ENTQ__",
      title: "Goal Setting",
      description: "Create personalized financial goals and track your progress with visual dashboards."
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/a98a/6c0e/05da516cc652a34aa7b875491bddb0df?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=slGtZKc3BMdPzFaXv0EiX3cYOyAeGcZ49oNbQyoVjRJRxRU9AX7CkOiyOLqi5VKFxKU-37-0lsaVpe6Sx2uj~MGbYDG4QH1axlHq2A4OnPmuohI5HKhZ2eM5XH0naAwYkjp0qPQycBeQkDwvq1vA1HoUbCwSbSHSAQ3dETUdrRZwJRcPQTUFIP7KUY5YpfV5Ko17NDGC0eYXYykZ3YQeVZ2xjVqxmfiPRQKs1eH38wH-DoyN~VZnWON3ps7BuBPHHimTD6T-fbkwq8FVGYQiGYmVMq2Jmpdpo7h6nB9Oi9V4GAWaP60hJlgIb0i3ZMm9EiT64vtlu562LXRk6vthtw__",
      title: "Investment Tracking",
      description: "Monitor your investments and receive personalized recommendations to optimize returns."
    }
  ];

  const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  };

  const sectionStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '80px 20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const sectionHeaderStyle = {
    marginBottom: '60px',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '24px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto 24px'
  };

  const descriptionStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.125rem)',
    lineHeight: '1.6',
    color: '#ccc',
    maxWidth: '600px',
    margin: '0 auto',
    paddingBottom: '20px'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1132px',
    margin: '0 auto'
  };

  const featureCardStyle = {
    backgroundColor: '#111',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #222',
    maxWidth: '364px',
    margin: '0 auto'
  };

  const cardHoverEffect = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  };

  const cardLeaveEffect = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  };

  const featureIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    color: '#fff',
    fontSize: '1rem',
    zIndex: 1
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '220px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  };

  const contentContainerStyle = {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid #222'
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#fff'
  };

  const cardDescriptionStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#aaa'
  };

  const responsiveStyles = `
    @media (max-width: ${breakpoints.tablet}) {
      .features-grid {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
      }
      
      .section-header {
        margin-bottom: 40px !important;
      }
      
      .feature-card {
        max-width: 100% !important;
      }
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      .features-grid {
        grid-template-columns: 1fr !important;
      }
      
      .feature-card {
        margin: 0 auto !important;
        max-width: 320px !important;
      }
      
      .section-title {
        font-size: 1.75rem !important;
      }
      
      .section-description {
        font-size: 1rem !important;
      }
    }
  `;

  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = responsiveStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section style={sectionStyle} className="features-section">
      <div style={containerStyle} className="container">
        <div style={sectionHeaderStyle} className="section-header">
          <h2 style={titleStyle} className="section-title">
            Current lets you <br />
            see it all in one feed
          </h2>
          <p style={descriptionStyle} className="section-description">
            Current integrates with the tools your team uses to get <br />
            work done, and gives you a unified feed to share and view <br />
            updates. All work in Current is organized into specific work <br />
            streams, and easily searchable.
          </p>
        </div>

        <div style={featuresGridStyle} className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={featureCardStyle} 
              className="feature-card"
              onMouseEnter={cardHoverEffect}
              onMouseLeave={cardLeaveEffect}
            >
              <div style={imageContainerStyle}>
                <div style={featureIconStyle} className="feature-icon">
                  <span>{index + 1}</span>
                </div>
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  style={imageStyle} 
                />
              </div>
              <div style={contentContainerStyle}>
                <h3 style={cardTitleStyle} className="feature-title">{feature.title}</h3>
                <p style={cardDescriptionStyle} className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}