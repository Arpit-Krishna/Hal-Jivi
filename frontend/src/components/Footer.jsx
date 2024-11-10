import React from 'react';

export default function Footer() {
    const styles = {
        footer: {
            backgroundColor: '#1c1c1e',
            color: '#ffffff',
            textAlign: 'center',
            padding: '20px 0',
            position: 'relative',
            bottom: 0,
            width: '100%',
        },
        paragraph: {
            margin: '5px 0',
            fontSize: '0.9rem',
        },
        watermark: {
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '2rem',
            color: 'rgba(255, 255, 255, 0.1)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
        },
    };

    return (
        <footer style={styles.footer}>
            <p style={styles.paragraph}>&copy; {new Date().getFullYear()} Hal Jivi. All rights reserved.</p>
            <p style={styles.paragraph}>Follow us on: <a href="#" style={{ color: '#00adb5' }}>Twitter</a>, <a href="#" style={{ color: '#00adb5' }}>Facebook</a>, <a href="#" style={{ color: '#00adb5' }}>Instagram</a></p>
            <div style={styles.watermark}>Hal Jivi</div> {}
        </footer>
    );
}
