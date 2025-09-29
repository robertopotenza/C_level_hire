import express from 'express';
import path from 'path';

const router = express.Router();

// Professional interface route inspired by enterprise platforms
router.get('/professional', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/professional.html'));
});

// Rev1 interface - Enterprise-grade split-screen design
router.get('/rev1', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../public/rev1.html'));
});

// API endpoints for professional interface
router.get('/api/professional/stats', (req, res) => {
    res.json({
        executivesPlaced: 1247,
        averageSalaryIncrease: '127%',
        timeToHire: '18 days',
        clientSatisfaction: '98.4%',
        companiesServed: 89,
        rolesActive: Math.floor(Math.random() * 30) + 45
    });
});

router.get('/api/professional/testimonials', (req, res) => {
    res.json({
        testimonials: [
            {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                company: "TechCorp Global",
                quote: "The AI-powered matching was incredible. Found my dream CTO role in 12 days with a 40% salary increase.",
                image: "/images/testimonial-1.jpg"
            },
            {
                name: "Michael Rodriguez",
                role: "Chief Financial Officer", 
                company: "Innovation Labs",
                quote: "Their executive network and negotiation support secured me equity worth $2.1M. Exceptional service.",
                image: "/images/testimonial-2.jpg"
            },
            {
                name: "Jennifer Taylor",
                role: "Chief Marketing Officer",
                company: "Growth Dynamics",
                quote: "Professional, strategic, results-driven. They understand C-suite recruitment like no one else.",
                image: "/images/testimonial-3.jpg"
            }
        ]
    });
});

export default router;