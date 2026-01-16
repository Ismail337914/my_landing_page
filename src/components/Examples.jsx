import React from 'react';

const Examples = () => {
    const examples = [
        {
            title: "Frizerski Salon 'Style'",
            description: 'Web stranica sa uslugama, galerijom i online rezervacijom.',
            type: 'frizer',
            demoLink: '#',
        },
        {
            title: "AutoServis 'Brzi'",
            description: 'Prikaz usluga, lokacija i kontakt forma za brzu ponudu.',
            type: 'autoservis',
            demoLink: '#',
        },
        {
            title: "Stomatologija 'Smile'",
            description: 'Informacije o uslugama, timu i online zakazivanje.',
            type: 'stomatolog',
            demoLink: '#',
        },
    ];

    const getBackgroundColor = (type) => {
        switch (type) {
            case 'frizer': return 'var(--example-1-bg)';
            case 'autoservis': return 'var(--example-2-bg)';
            case 'stomatolog': return 'var(--example-3-bg)';
            default: return '#ddd';
        }
    };

    const getEmoji = (type) => {
        switch (type) {
            case 'frizer': return '💈';
            case 'autoservis': return '🔧';
            case 'stomatolog': return '🦷';
            default: return '🏢';
        }
    };

    return (
        <section id="primjeri" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Kako Bi Vaša Stranica Izgledala</h2>
                <p style={styles.subtitle}>
                    Ovo su primjeri koje sam napravio za lokalne biznise:
                </p>

                <div style={styles.grid}>
                    {examples.map((example, index) => (
                        <div key={index} style={styles.card}>
                            <div
                                style={{
                                    ...styles.image,
                                    background: getBackgroundColor(example.type),
                                }}
                            >
                                {getEmoji(example.type)} {example.type === 'frizer' ? 'Frizerski Salon' :
                                    example.type === 'autoservis' ? 'Autoservis' : 'Stomatologija'}
                            </div>
                            <div style={styles.content}>
                                <h4 style={styles.exampleTitle}>{example.title}</h4>
                                <p style={styles.exampleDescription}>{example.description}</p>
                                <a href={example.demoLink} style={styles.link}>
                                    Pogledaj demo →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mapa-demo">
                    
                    <h3>Evo kako će vaša lokacija izgledati</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.244914289709!2d18.41384777648321!3d43.85683093935252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8d65f2b7c9d%3A0x6a7f9125b7e9b44c!2sSarajevo%20City%20Center!5e0!3m2!1sen!2sba!4v1713456321234!5m2!1sen!2sba"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen
                        loading="lazy"
                        title="Primjer lokacije"
                    />
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '5rem 0',
        background: '#f1f5f9',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'var(--text-light)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        background: 'var(--white)',
        borderRadius: 'var(--border-radius)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow)',
    },
    image: {
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    content: {
        padding: '1.5rem',
    },
    exampleTitle: {
        marginBottom: '0.5rem',
        color: 'var(--text-dark)',
    },
    exampleDescription: {
        color: 'var(--text-light)',
    },
    link: {
        display: 'inline-block',
        marginTop: '1rem',
        color: 'var(--primary-color)',
        fontWeight: '600',
        textDecoration: 'none',
    },
};

export default Examples;