import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    padding: 2rem;
    background: var(--bg-color, #f3f4f6); /* Tailwind default gray-100 */
    color: var(--text-color, #1f2937); /* Tailwind default gray-800 */
    text-align: center;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.5;
    }
`;

function About() {
    return (
        <AboutSection>
            <h1>About Me</h1>
            <p>
                I am a photographer specializing in Cars, Sports, and Portraits. My goal is to capture stories and emotions through the lens.
            </p>
        </AboutSection>
    );
}

export default About;
