// chatbot.js - COMPLETE FIXED CODE WITH CORRECT ANSWER MAPPING

// Chatbot Questions and Answers Database
const chatbotSections = {
    home: {
        title: "Home",
        questions: [
            {
                question: "What is Balvirt?",
                answer: "Balvirt is a technology and innovation company providing modern digital solutions. We focus on building digital transformation strategies through web and mobile app development, AI-based systems, UI/UX design, and industry automation tools."
            },
            {
                question: "What is the mission of Balvirt?",
                answer: "Our mission is to deliver high-quality digital experiences that solve real-world business problems using scalable, modern, and user-friendly technologies. We aim to make businesses Cloud-ready, Data-ready, and AI-ready."
            },
            {
                question: "What is Balvirt's vision?",
                answer: "We aim to empower startups, industries, and enterprises by transforming their ideas into smart and sustainable digital products. Our vision is to be the most trusted technology partner for businesses worldwide."
            },
            {
                question: "Who founded Balvirt?",
                answer: "Balvirt was founded by a team of passionate technology enthusiasts with years of experience in digital transformation and innovation."
            },
            {
                question: "What makes Balvirt different?",
                answer: "We combine cutting-edge technology with business understanding to deliver solutions that actually work and drive real growth for our clients."
            }
        ]
    },
    services: {
        title: "Services",
        questions: [
            {
                question: "What are the main services offered by Balvirt?",
                answer: "Balvirt provides comprehensive IT solutions including:<br>• Full-stack web development<br>• Mobile app development<br>• Cloud computing & hosting<br>• UI/UX design<br>• AI & machine learning integration<br>• Cybersecurity & IT consulting<br>• Digital marketing and branding services"
            },
            {
                question: "What web development services do you provide?",
                answer: "Balvirt creates websites with modern frameworks like React, Node.js, and Django. We ensure every website is SEO-optimized, mobile-friendly, and aligned with business goals. Our websites are built for performance and user experience."
            },
            {
                question: "Do you offer e-commerce website solutions?",
                answer: "Yes! Balvirt provides e-commerce platforms with advanced features like payment gateway integration, product management, analytics, and responsive design for better sales performance."
            },
            {
                question: "What about mobile app development?",
                answer: "Our mobile development team uses Flutter, React Native, and native technologies to deliver high-performance apps for businesses and startups. We focus on creating intuitive user experiences."
            },
            {
                question: "Do you provide digital marketing services?",
                answer: "Yes, Balvirt offers SEO, social media marketing, email campaigns, and brand management to increase online visibility and engagement."
            },
            {
                question: "Do you offer tech consulting services?",
                answer: "Absolutely! Our experts analyze business needs and recommend the best tools, frameworks, and tech stacks to maximize efficiency and results."
            },
            {
                question: "Does Balvirt provide maintenance or post-launch support?",
                answer: "Yes, we provide 24/7 maintenance and technical support. After project delivery, our team ensures continuous updates, security patches, and performance optimization."
            },
            {
                question: "What is your pricing model?",
                answer: "We offer flexible pricing models - fixed price for well-defined projects, hourly rates for ongoing work, and dedicated team models for long-term partnerships."
            },
            {
                question: "Do you work on small projects?",
                answer: "Yes! We work with projects of all sizes - from small business websites to large enterprise applications."
            }
        ]
    },
    industries: {
        title: "Industries",
        questions: [
            {
                question: "Which industries does Balvirt serve?",
                answer: "Balvirt provides solutions for:<br>• Education and E-Learning<br>• Healthcare and Pharmaceuticals<br>• Retail and E-commerce<br>• Finance and Banking<br>• Manufacturing and Industrial Automation<br>• Travel and Tourism<br>• Real Estate and Property Management<br>• Information Technology and Software"
            },
            {
                question: "Do you work with startups and small businesses?",
                answer: "Yes, we love helping startups grow! Balvirt assists startups by creating MVPs, offering affordable tech solutions, and providing digital growth strategies for scaling."
            },
            {
                question: "Do you serve enterprise-level clients?",
                answer: "Yes, we have enterprise partnerships. Our enterprise solutions include large-scale systems, ERP software, automation tools, and customized workflow platforms."
            },
            {
                question: "How does Balvirt help the education sector?",
                answer: "Balvirt develops e-learning portals, LMS systems, and AI-based educational tools for schools, colleges, and training institutions."
            },
            {
                question: "What digital solutions do you provide for healthcare?",
                answer: "We build telemedicine apps, appointment systems, and patient data solutions to simplify healthcare delivery and improve patient outcomes."
            },
            {
                question: "Can Balvirt create automation systems for industries?",
                answer: "Yes! Balvirt designs AI-based control and monitoring systems that improve efficiency, productivity, and safety in industrial environments."
            },
            {
                question: "Do you have experience in fintech?",
                answer: "Yes, we've developed secure financial applications, payment gateways, and banking solutions with compliance to financial regulations."
            }
        ]
    },
    technology: {
        title: "Technology",
        questions: [
            {
                question: "What technologies does Balvirt use for development?",
                answer: "Balvirt's tech stack includes HTML5, CSS3, JavaScript, React, Node.js, Python, Django, Flutter, and cloud solutions like AWS and Azure."
            },
            {
                question: "Which database systems do you use?",
                answer: "Depending on project needs, we work with MySQL, PostgreSQL, MongoDB, and Firebase to ensure data efficiency and scalability."
            },
            {
                question: "Does Balvirt use Artificial Intelligence (AI)?",
                answer: "Yes! We integrate AI for automation, data analysis, chatbots, predictive models, and process optimization across industries."
            },
            {
                question: "What tools do you use for design and UI/UX?",
                answer: "Our design team uses Figma, Adobe XD, and Photoshop to create visually appealing and user-friendly interfaces."
            },
            {
                question: "What security practices do you follow?",
                answer: "We follow global cybersecurity standards including encryption, data backups, authentication systems, and regular vulnerability checks."
            },
            {
                question: "Do you support cloud and DevOps solutions?",
                answer: "Yes, we handle full cloud deployment and DevOps pipelines using CI/CD, Docker, AWS, and GCP."
            },
            {
                question: "Do you work with blockchain technology?",
                answer: "Yes, we have experience in blockchain development for secure transactions and decentralized applications."
            }
        ]
    },
    careers: {
        title: "Careers",
        questions: [
            {
                question: "How to apply for a job or internship?",
                answer: "Browse available positions on our Careers page, upload your resume, and our team will contact you if shortlisted. We welcome passionate individuals!"
            },
            {
                question: "Do you hire freshers?",
                answer: "Yes! We welcome freshers and provide training opportunities. Our internship programs help students gain practical experience."
            },
            {
                question: "What kind of team culture do you have?",
                answer: "We encourage creativity, teamwork, and continuous learning in an open work culture. Our team members support each other and collaborate effectively."
            },
            {
                question: "Do you offer remote work options?",
                answer: "Yes, depending on the project and role, Balvirt provides remote work options and flexible schedules."
            },
            {
                question: "What are the current job openings?",
                answer: "We're always looking for talented developers, designers, and project managers. Check our Careers page for current openings and requirements."
            },
            {
                question: "Do you provide training?",
                answer: "Yes, we provide regular training sessions, workshops, and learning opportunities to help our team grow professionally."
            }
        ]
    },
    about: {
        title: "About",
        questions: [
            {
                question: "Who created Balvirt?",
                answer: "Balvirt was founded by a passionate team focused on digital innovation and technology solutions."
            },
            {
                question: "Where is Balvirt located?",
                answer: "We're based in India with clients across the globe. Our main office is located at Hirai Estate, Aadarshnagar, Ghulewadi, Tal-Sangamner, Dist-Ahilyanagar, Maharashtra - 422605. You can reach us at +91 9665521708 or contact@balvirt.com"
            },
            {
                question: "How long has Balvirt been in business?",
                answer: "Balvirt has been delivering innovative technology solutions and helping businesses transform digitally with years of industry experience."
            },
            {
                question: "What is Balvirt's team size?",
                answer: "We have a growing team of skilled professionals including developers, designers, project managers, and business analysts."
            },
            {
                question: "What are Balvirt's achievements?",
                answer: "We've successfully delivered 100+ projects, helped numerous businesses grow digitally, and maintained long-term partnerships with our clients."
            }
        ]
    },
    contact: {
        title: "Contact",
        questions: [
            {
                question: "How can I contact Balvirt?",
                answer: "You can reach us through:<br>• Phone: +91 9665521708<br>• Email: contact@balvirt.com<br>• Contact Form on our website<br>We typically respond within 24 hours."
            },
            {
                question: "Can I request a quote?",
                answer: "Yes! Contact us with your project details, and we'll provide a customized quote based on your requirements and timeline."
            },
            {
                question: "What's the average project duration?",
                answer: "Small websites may take 1-2 weeks, while large-scale apps may take 1-3 months. We provide detailed timelines during planning."
            },
            {
                question: "Do you offer free consultations?",
                answer: "Yes, we offer free initial consultations to understand your requirements and suggest the best solutions for your business."
            },
            {
                question: "What is your working hours?",
                answer: "We work from 8:30 AM to 5:30 PM IST, Monday to Friday. For urgent matters, we provide 24/7 support to our clients."
            },
            {
                question: "Do you work with international clients?",
                answer: "Yes! We have clients from various countries and we're comfortable working across different time zones."
            }
        ]
    }
};

// FIXED General Questions with CORRECT MAPPING
const generalQA = {
    // Greetings
    "hi": "Hello 👋 Welcome to Balvirt! How can I assist you today?",
    "hello": "Hey there 👋 Welcome to Balvirt! How can I help you?",
    "hey": "Hi 👋 I'm your virtual assistant from Balvirt Technologies!",
    "good morning": "Wishing you a productive and inspiring start to your day!<br>Let's create something amazing together — how can I assist you today?",
    "good afternoon": "Hope your day's going well!<br>I'm here to help you explore Balvirt's digital solutions or answer any questions you have.",
    "good evening": "Good evening 🌇<br>As the day winds down, innovation never stops at Balvirt.<br>How may I assist you in achieving your next digital goal tonight?",
    "good night":"Wishing you a peaceful night ahead from Balvirt ✨<br>Innovation never stops, but even creators need rest. See you refreshed and ready to build the future! 🌌",

    // About the bot
    "who are you": "I'm Balvirt's virtual assistant 🤖 here to make your experience easier and faster!",
    "who created you": "I was built by the amazing team at Balvirt Technologies 🚀 to assist and interact with users like you 😊!",
    "who develop you": "I was developed by the Balvirt Tech Team 💻 using modern AI technology.",
    "are you real": "I'm a virtual AI assistant 🤖 created by Balvirt Technologies to help you anytime, anywhere 🌐.",
    "are you a robot": "Yes 🤖 but a friendly one! I'm here to guide you about Balvirt and its services.",
    "are you human": "Not exactly 😅, I'm an AI chatbot designed to assist you just like a human would!",
    "what is your name": "I'm BalvirtBot 🤖, your smart assistant from Balvirt Technologies!",

    // About Company - DIRECT MAPPING
    "what is balvirt": chatbotSections.home.questions[0].answer,
    "tell me about balvirt": chatbotSections.home.questions[0].answer,
    "where is balvirt located": chatbotSections.about.questions[1].answer,
    "what services do you offer": chatbotSections.services.questions[0].answer,
    "what does balvirt do": chatbotSections.home.questions[0].answer,
    "who is the founder of balvirt": chatbotSections.about.questions[0].answer,

    // Services - DIRECT MAPPING
    "services": chatbotSections.services.questions[0].answer,
    "tell me about your services": chatbotSections.services.questions[0].answer,
    "web development": chatbotSections.services.questions[1].answer,
    "cloud services": "We provide scalable Cloud Services ☁️ to ensure your data and operations run smoothly.",
    "ai solutions": chatbotSections.technology.questions[2].answer,
    "software development": "We create secure and efficient software tailored to your goals 💻.",
    "consulting": chatbotSections.services.questions[5].answer,

    // Industries - DIRECT MAPPING
    "industries": chatbotSections.industries.questions[0].answer,
    "what industries do you serve": chatbotSections.industries.questions[0].answer,
    "which industry do you specialize in": chatbotSections.industries.questions[0].answer,

    // Technology - DIRECT MAPPING
    "technology": chatbotSections.technology.questions[0].answer,
    "what technologies do you use": chatbotSections.technology.questions[0].answer,
    "which tools do you use": chatbotSections.technology.questions[3].answer,

    // Careers - DIRECT MAPPING
    "careers": chatbotSections.careers.questions[0].answer,
    "job openings": chatbotSections.careers.questions[4].answer,
    "how can i apply for a job": chatbotSections.careers.questions[0].answer,
    "internship": chatbotSections.careers.questions[1].answer,
    "is balvirt hiring": chatbotSections.careers.questions[4].answer,

    // Contact - DIRECT MAPPING
    "contact": chatbotSections.contact.questions[0].answer,
    "how can i contact you": chatbotSections.contact.questions[0].answer,
    "email": "You can reach<br>contact@balvirt.com<br>for queries and support.",
    "phone": "📞+91 9665521708",
    "help": "I'm here to help! 🤖 You can also visit our Contact page if you need personal assistance 💬.",

    // Social / Info
    "website": "You can explore everything about us on our official site 🌐 www.balvirt.com",
    "social media": "Follow us on LinkedIn & Instagram 📱 to stay updated!",

    // FIXED: International clients question
    "do you work with international clients": chatbotSections.contact.questions[5].answer,
    "international clients": chatbotSections.contact.questions[5].answer,
    "foreign clients": chatbotSections.contact.questions[5].answer,
    "global clients": chatbotSections.contact.questions[5].answer,

    // Pricing and Timeline
    "pricing": "Our pricing depends entirely on your project requirements and complexity. We offer flexible models such as Fixed Price, Hourly Rate, or Dedicated Team. Contact us to get a personalized quote that fits your needs! 💰",
    "price": "We provide customized and competitive pricing based on your requirements and goals. Whether it's a small website or a full-scale digital solution, we'll prepare the best quote for your budget. Request a free consultation! 📊",
    "cost": "Project costs vary depending on scope, features, and design. We ensure transparent and fair pricing with no hidden charges. Let's discuss your needs for an accurate estimate! 💵",
    "how much": "Our pricing is completely requirement-based. After understanding your project goals and features, we'll share a detailed and transparent quote. Get in touch to know your exact cost!",

    // Project Timeline
    "project timeline": "The timeline depends on your project's scope and functionality. Once we understand your requirements, we'll share a clear and realistic delivery schedule. ⏱️",
    "timeline": "Every project is unique — timelines are planned according to complexity, design, and functionality. We always aim for timely delivery with quality assurance. 📅",
    "how long": "Project duration is decided after analyzing the full requirements and expected features. We make sure your project is completed efficiently without compromising quality. 🚀",
    "delivery time": "Delivery time depends on the project type and features. After discussing your needs, we'll provide a detailed timeline and regular progress updates. ⏰",
    "duration": "Development duration varies as per project complexity and requirements. We'll finalize the timeline after understanding your goals and expectations.",
    
    // Location and Establishment
    "location":"We're based in India with clients across the globe. Our main office is located at <br>Hirai Estate, Aadarshnagar, Ghulewadi, Tal-Sangamner, Dist-Ahilyanagar, Maharashtra - 422605.<br>You can reach us at:<br>📞+91 9665521708<br>📧contact@balvirt.com",
    "when balvirt started":"Balvirt Technologies was officially established in 2022.",
    "when balvirt established":"Balvirt Technologies was officially established in 2022.",
    "when was balvirt founded":"Balvirt Technologies was officially founded in 2022.",

    // Polite Talk
    "thank you": "You're welcome 😊 Always happy to assist you!",
    "thanks": "You're most welcome 😊",
    "bye": "Goodbye 👋 Have a wonderful day ahead!",
    "goodbye": "See you soon 👋 Take care!",
    "nice to meet you": "Nice to meet you too 😊 I'm glad to assist!"
};

// ENHANCED QUESTION UNDERSTANDING SYSTEM WITH FIXED MAPPING
class QuestionUnderstanding {
    constructor() {
        this.keywordMapping = {
            // Service related keywords
            'website': 'web development',
            'app': 'mobile app development',
            'application': 'software development',
            'software': 'software development',
            'digital': 'services',
            'online': 'services',
            'platform': 'web development',
            'ecommerce': 'e-commerce website solutions',
            'shop': 'e-commerce website solutions',
            'store': 'e-commerce website solutions',
            
            // Technology keywords
            'react': 'what technologies do you use',
            'node': 'what technologies do you use',
            'python': 'what technologies do you use',
            'flutter': 'what technologies do you use',
            'database': 'which database systems do you use',
            'ai': 'ai solutions',
            'artificial intelligence': 'ai solutions',
            'machine learning': 'ai solutions',
            'cloud': 'cloud services',
            'hosting': 'cloud services',
            'devops': 'cloud and devops solutions',
            
            // Career keywords
            'job': 'careers',
            'work': 'careers',
            'career': 'careers',
            'hire': 'is balvirt hiring',
            'hiring': 'is balvirt hiring',
            'intern': 'internship',
            'fresher': 'do you hire freshers',
            'vacancy': 'job openings',
            'position': 'job openings',
            
            // Contact keywords
            'call': 'contact',
            'email': 'email',
            'phone': 'phone',
            'reach': 'how can i contact you',
            'get in touch': 'how can i contact you',
            'address': 'location',
            'visit': 'location',
            
            // FIXED: International clients mapping
            'international': 'do you work with international clients',
            'foreign': 'do you work with international clients',
            'global': 'do you work with international clients',
            'worldwide': 'do you work with international clients',
            'overseas': 'do you work with international clients',
            
            // Pricing keywords
            'cost': 'pricing',
            'price': 'pricing',
            'budget': 'pricing',
            'quote': 'can i request a quote',
            'expensive': 'pricing',
            'affordable': 'pricing',
            
            // Timeline keywords
            'time': 'project timeline',
            'duration': 'project timeline',
            'deliver': 'project timeline',
            'deadline': 'project timeline',
            'schedule': 'project timeline',
            'how long': 'project timeline',
            
            // Company info
            'founder': 'who is the founder of balvirt',
            'established': 'when balvirt started',
            'started': 'when balvirt started',
            'founded': 'when balvirt started',
            'office': 'location',
            'based': 'location'
        };
        
        this.questionPatterns = {
            'how to': 'process',
            'what is': 'definition',
            'where is': 'location',
            'when was': 'time',
            'who is': 'person',
            'why should': 'reason',
            'can you': 'capability',
            'do you': 'service_check'
        };
    }

    extractKeywords(question) {
        const words = question.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2);
        
        return [...new Set(words)];
    }

    understandQuestion(question) {
        const lowerQuestion = question.toLowerCase().trim();
        const keywords = this.extractKeywords(question);
        
        console.log('Understanding question:', { question, keywords });
        
        // Check for direct matches first
        if (generalQA[lowerQuestion]) {
            return {
                understood: true,
                type: 'direct_match',
                suggestedQuestion: lowerQuestion,
                confidence: 1.0
            };
        }
        
        // NEW: Check for exact question in sections first
        const sectionExactMatch = this.findExactInSections(lowerQuestion);
        if (sectionExactMatch) {
            return {
                understood: true,
                type: 'section_exact_match',
                suggestedQuestion: sectionExactMatch.question,
                confidence: 0.95,
                section: sectionExactMatch.section
            };
        }
        
        // Check for keyword mappings
        let bestMatch = null;
        let highestScore = 0;
        
        for (const [keyword, mappedQuestion] of Object.entries(this.keywordMapping)) {
            if (lowerQuestion.includes(keyword)) {
                const score = this.calculateMatchScore(lowerQuestion, keyword);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = mappedQuestion;
                }
            }
        }
        
        if (bestMatch && highestScore > 0.3) {
            return {
                understood: true,
                type: 'keyword_mapping',
                suggestedQuestion: bestMatch,
                confidence: highestScore,
                keywords: keywords
            };
        }
        
        // Check section questions
        const sectionMatch = this.findInSections(lowerQuestion);
        if (sectionMatch) {
            return {
                understood: true,
                type: 'section_match',
                suggestedQuestion: sectionMatch.question,
                confidence: sectionMatch.confidence,
                section: sectionMatch.section
            };
        }
        
        return {
            understood: false,
            type: 'not_understood',
            confidence: 0,
            keywords: keywords
        };
    }
    
    // NEW METHOD: Find exact question in sections
    findExactInSections(question) {
        for (const [sectionKey, section] of Object.entries(chatbotSections)) {
            for (const qa of section.questions) {
                if (question === qa.question.toLowerCase()) {
                    return {
                        question: qa.question,
                        section: sectionKey,
                        confidence: 1.0
                    };
                }
            }
        }
        return null;
    }
    
    calculateMatchScore(question, keyword) {
        const questionWords = question.split(' ');
        const keywordWords = keyword.split(' ');
        
        let score = 0;
        keywordWords.forEach(kw => {
            if (questionWords.some(qw => qw === kw)) {
                score += 1;
            } else if (question.includes(kw)) {
                score += 0.5;
            }
        });
        
        return score / keywordWords.length;
    }
    
    findInSections(question) {
        let bestMatch = null;
        let highestSimilarity = 0;
        
        for (const [sectionKey, section] of Object.entries(chatbotSections)) {
            for (const qa of section.questions) {
                const similarity = this.calculateSimilarity(question, qa.question.toLowerCase());
                if (similarity > highestSimilarity && similarity > 0.3) {
                    highestSimilarity = similarity;
                    bestMatch = {
                        question: qa.question,
                        section: sectionKey,
                        confidence: similarity
                    };
                }
            }
        }
        
        return bestMatch;
    }
    
    calculateSimilarity(str1, str2) {
        const words1 = str1.split(' ');
        const words2 = str2.split(' ');
        
        const commonWords = words1.filter(word => 
            words2.some(w2 => w2.includes(word) || word.includes(w2))
        );
        
        return commonWords.length / Math.max(words1.length, words2.length);
    }
    
    getSuggestionsBasedOnKeywords(keywords) {
        const suggestions = [];
        
        keywords.forEach(keyword => {
            for (const [mapKeyword, question] of Object.entries(this.keywordMapping)) {
                if (keyword.includes(mapKeyword) || mapKeyword.includes(keyword)) {
                    if (!suggestions.includes(question)) {
                        suggestions.push(question);
                    }
                }
            }
        });
        
        return suggestions.slice(0, 3);
    }
}

// REPEAT QUESTION DETECTION
class RepeatQuestionDetector {
    constructor() {
        this.questionHistory = new Map();
        this.maxRepeats = 3;
        this.timeWindow = 5 * 60 * 1000;
    }

    checkRepeat(question) {
        const now = Date.now();
        const key = question.toLowerCase().trim();

        if (!this.questionHistory.has(key)) {
            this.questionHistory.set(key, { count: 1, lastAsked: now });
            return { isRepeat: false, count: 1 };
        }

        const record = this.questionHistory.get(key);

        if (now - record.lastAsked > this.timeWindow) {
            record.count = 1;
            record.lastAsked = now;
            return { isRepeat: false, count: 1 };
        }

        record.count++;
        record.lastAsked = now;

        return {
            isRepeat: record.count >= this.maxRepeats,
            count: record.count
        };
    }

    getRepeatMessage(question, count) {
        const messages = [
            `I notice you've asked about "${question}" ${count} times. Is there something specific you'd like to know that I haven't covered? 🤔`,
            `You've asked about "${question}" ${count} times now. Would you like me to connect you with a human representative for more detailed assistance? 👨‍💼`,
            `I see you're really interested in "${question}"! Let me provide our contact details for personalized help: 📞 +91 9665521708 📧 contact@balvirt.com`,
            `It seems you have more questions about "${question}". Our team would be happy to provide detailed information. Shall I schedule a callback? 📅`
        ];

        return messages[Math.min(count - this.maxRepeats, messages.length - 1)];
    }
}

// ENHANCED SPELLING CORRECTION
class EnhancedSpellChecker {
    constructor() {
        this.commonMistakes = {
            "wat": "what",
            "develpment": "development",
            "develoment": "development",
            "servics": "services",
            "tecnology": "technology",
            "teknology": "technology",
            "carear": "career",
            "carrier": "career",
            "aply": "apply",
            "aplly": "apply",
            "contakt": "contact",
            "kontact": "contact",
            "balvert": "balvirt",
            "balvirtt": "balvirt",
            "balvir": "balvirt",
            "webdev": "web development",
            "webdevlopment": "web development",
            "mobail": "mobile",
            "moble": "mobile",
            "aii": "ai",
            "artificial": "ai",
            "pricing": "pricing",
            "prise": "price",
            "pric": "price",
            "costing": "pricing",
            "timeline": "timeline",
            "time line": "timeline",
            "duration": "timeline",
            "delivery": "timeline"
        };
    }

    correctSpelling(text) {
        let corrected = text.toLowerCase();

        for (const [wrong, correct] of Object.entries(this.commonMistakes)) {
            corrected = corrected.replace(new RegExp(wrong, 'g'), correct);
        }

        corrected = corrected.replace(/([a-z])\1{2,}/g, '$1$1');

        return corrected !== text.toLowerCase() ? corrected : null;
    }

    suggestCorrection(original, corrected) {
        const suggestions = [
            `Did you mean "${corrected}"?`,
            `I think you might be looking for "${corrected}"`,
            `Perhaps you meant "${corrected}"?`,
            `Looking for "${corrected}" maybe?`
        ];

        return suggestions[Math.floor(Math.random() * suggestions.length)];
    }
}

// FAST SEARCH IMPLEMENTATION
class FastQuestionSearch {
    constructor() {
        this.questionIndex = new Map();
        this.keywordIndex = new Map();
        this.initializeIndex();
    }

    initializeIndex() {
        console.time("Indexing Questions");

        for (const sectionKey in chatbotSections) {
            const section = chatbotSections[sectionKey];
            section.questions.forEach(qa => {
                this.addToIndex(qa.question, qa.answer, 'section');
            });
        }

        for (const [question, answer] of Object.entries(generalQA)) {
            this.addToIndex(question, answer, 'general');
        }

        console.timeEnd("Indexing Questions");
        console.log(`Indexed ${this.questionIndex.size} questions for fast search`);
    }

    addToIndex(question, answer, type) {
        const key = question.toLowerCase().trim();

        this.questionIndex.set(key, { answer, type, originalQuestion: question });

        const words = this.extractKeywords(question);
        words.forEach(word => {
            if (!this.keywordIndex.has(word)) {
                this.keywordIndex.set(word, []);
            }
            this.keywordIndex.get(word).push(key);
        });
    }

    extractKeywords(text) {
        const words = text.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 2)
            .filter(word => !['what', 'how', 'when', 'where', 'which', 'why', 'does', 'do', 'is', 'are', 'the', 'and', 'for'].includes(word));

        return [...new Set(words)];
    }

    findAnswer(userQuestion) {
        const lowerQuestion = userQuestion.toLowerCase().trim();

        if (this.questionIndex.has(lowerQuestion)) {
            const result = this.questionIndex.get(lowerQuestion);
            return {
                answer: result.answer,
                matchedQuestion: result.originalQuestion,
                type: 'exact',
                confidence: 1.0
            };
        }

        const spellChecker = new EnhancedSpellChecker();
        const corrected = spellChecker.correctSpelling(userQuestion);
        if (corrected && this.questionIndex.has(corrected)) {
            const result = this.questionIndex.get(corrected);
            return {
                answer: result.answer,
                matchedQuestion: result.originalQuestion,
                type: 'spelling_corrected',
                confidence: 0.9,
                correction: corrected,
                original: userQuestion
            };
        }

        const userKeywords = this.extractKeywords(userQuestion);
        const keywordMatches = this.findByKeywords(userKeywords);

        if (keywordMatches.length > 0 && keywordMatches[0].score >= 2) {
            const bestMatch = keywordMatches[0];
            const result = this.questionIndex.get(bestMatch.question);
            return {
                answer: result.answer,
                matchedQuestion: result.originalQuestion,
                type: 'keyword',
                confidence: Math.min(0.8, bestMatch.score / 5),
                score: bestMatch.score
            };
        }

        return this.findBySimilarity(lowerQuestion);
    }

    findByKeywords(userKeywords) {
        const matches = [];
        const questionScores = new Map();

        userKeywords.forEach(keyword => {
            if (this.keywordIndex.has(keyword)) {
                const relatedQuestions = this.keywordIndex.get(keyword);
                relatedQuestions.forEach(question => {
                    questionScores.set(question, (questionScores.get(question) || 0) + 1);
                });
            }
        });

        for (const [question, score] of questionScores) {
            matches.push({ question, score });
        }

        return matches.sort((a, b) => b.score - a.score).slice(0, 5);
    }

    findBySimilarity(lowerQuestion) {
        let bestMatch = null;
        let bestSimilarity = 0.5;

        for (const [questionKey, data] of this.questionIndex) {
            const similarity = getSimilarity(lowerQuestion, questionKey);

            if (similarity > bestSimilarity) {
                bestSimilarity = similarity;
                bestMatch = {
                    answer: data.answer,
                    matchedQuestion: data.originalQuestion,
                    type: 'similarity',
                    confidence: similarity,
                    similarity: similarity
                };
            }
        }

        return bestMatch;
    }
}

// Initialize components
const fastSearch = new FastQuestionSearch();
const repeatDetector = new RepeatQuestionDetector();
const spellChecker = new EnhancedSpellChecker();
const questionUnderstanding = new QuestionUnderstanding();

// Edit Distance Algorithm for Spelling Correction
function editDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    const matrix = [];
    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + 1
                );
            }
        }
    }

    return matrix[len1][len2];
}

function getSimilarity(str1, str2) {
    const maxLength = Math.max(str1.length, str2.length);
    if (maxLength === 0) return 1.0;

    const distance = editDistance(str1.toLowerCase(), str2.toLowerCase());
    return 1 - (distance / maxLength);
}

// DRAGGABLE CHATBOT FUNCTIONALITY
class DraggableChatbot {
    constructor() {
        this.isDragging = false;
        this.currentX = 0;
        this.currentY = 0;
        this.initialX = 0;
        this.initialY = 0;
        this.xOffset = 0;
        this.yOffset = 0;
        this.chatBox = null;
        this.chatHeader = null;
        
        this.init();
    }

    init() {
        this.chatBox = document.querySelector('.balvirt-chatbot-box');
        this.chatHeader = document.querySelector('.balvirt-chatbot-header');
        
        if (!this.chatBox || !this.chatHeader) {
            console.error('Chatbot elements not found for dragging');
            return;
        }

        if (this.isDesktopDevice()) {
            this.makeDraggable();
        }
    }

    isDesktopDevice() {
        return window.innerWidth > 768;
    }

    makeDraggable() {
        this.chatHeader.style.cursor = 'move';
        
        this.chatHeader.addEventListener('mousedown', (e) => {
            this.dragStart(e);
        });

        document.addEventListener('mousemove', (e) => {
            this.drag(e);
        });

        document.addEventListener('mouseup', () => {
            this.dragEnd();
        });

        this.chatHeader.addEventListener('touchstart', (e) => {
            this.dragStart(e.touches[0]);
        });

        document.addEventListener('touchmove', (e) => {
            this.drag(e.touches[0]);
        });

        document.addEventListener('touchend', () => {
            this.dragEnd();
        });
    }

    dragStart(e) {
        this.initialX = e.clientX - this.xOffset;
        this.initialY = e.clientY - this.yOffset;
        
        if (e.target === this.chatHeader || this.chatHeader.contains(e.target)) {
            this.isDragging = true;
            
            this.chatBox.style.transition = 'none';
            this.chatBox.style.cursor = 'grabbing';
            this.chatHeader.style.cursor = 'grabbing';
            
            this.chatBox.style.zIndex = '10001';
        }
    }

    drag(e) {
        if (this.isDragging) {
            e.preventDefault();
            
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;

            this.setTranslate(this.currentX, this.currentY, this.chatBox);
        }
    }

    dragEnd() {
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.isDragging = false;
        
        this.chatBox.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        this.chatBox.style.cursor = 'default';
        this.chatHeader.style.cursor = 'move';
        
        this.savePosition();
    }

    setTranslate(xPos, yPos, el) {
        el.style.transform = `translate(${xPos}px, ${yPos}px) scale(1)`;
    }

    savePosition() {
        localStorage.setItem('chatbotPosition', JSON.stringify({
            x: this.xOffset,
            y: this.yOffset
        }));
    }

    loadPosition() {
        const saved = localStorage.getItem('chatbotPosition');
        if (saved) {
            const position = JSON.parse(saved);
            this.xOffset = position.x;
            this.yOffset = position.y;
            this.setTranslate(position.x, position.y, this.chatBox);
        }
    }
}

// FIXED findAnswer FUNCTION - CLEAN RESPONSES
function findAnswer(userQuestion) {
    const startTime = performance.now();

    const repeatCheck = repeatDetector.checkRepeat(userQuestion);

    const understanding = questionUnderstanding.understandQuestion(userQuestion);
    
    console.log('Question Understanding Result:', understanding);

    let result;
    if (understanding.understood) {
        result = fastSearch.findAnswer(understanding.suggestedQuestion);
        result.understanding = understanding;
    } else {
        result = fastSearch.findAnswer(userQuestion);
    }

    const endTime = performance.now();
    console.log(`Search took ${(endTime - startTime).toFixed(2)}ms, Repeat count: ${repeatCheck.count}`);

    if (!result) {
        return {
            answer: getIntelligentResponse(userQuestion, understanding),
            matchedQuestion: userQuestion,
            type: 'not_found',
            isRepeat: repeatCheck.isRepeat,
            repeatCount: repeatCheck.count,
            understanding: understanding
        };
    }

    return {
        ...result,
        isRepeat: repeatCheck.isRepeat,
        repeatCount: repeatCheck.count,
        understanding: understanding
    };
}

// FIXED INTELLIGENT RESPONSE
function getIntelligentResponse(question, understanding) {
    const keywords = understanding.keywords || [];
    
    if (keywords.length > 0) {
        const suggestions = questionUnderstanding.getSuggestionsBasedOnKeywords(keywords);
        
        if (suggestions.length > 0) {
            let response = `I'm not sure about "<strong>${question}</strong>" 🤔<br><br>Here are some related topics that might help:<br><br>`;
            
            suggestions.forEach((suggestion, index) => {
                response += `${index + 1}. <button class="balvirt-suggestion-btn" onclick="askQuestion('${suggestion}')" style="background: none; border: none; color: #007bff; text-decoration: underline; cursor: pointer;">${suggestion}</button><br>`;
            });
            
            response += `<br>Or browse our sections above for more information.`;
            return response;
        }
    }
    
    return `I'm not sure about "<strong>${question}</strong>" 🤔<br><br>Please try:<br>
    • Asking in a different way<br>
    • Choosing from the suggested questions above<br>
    • Browsing our service sections<br><br>
    For immediate assistance, contact us: 📞 +91 9665521708 📧 contact@balvirt.com`;
}

// Time-based Greeting
function getTimeBasedGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    let greeting = "";
    
    if (hour >= 5 && hour < 12) {
        greeting = "<span style='color:#0074D9;'>Good morning </span><br>Let's make today productive and full of new ideas!<br>";
    } else if (hour >= 12 && hour < 17) {
        greeting = "<span style='color:#0074D9;'>Good afternoon</span><br>Hope your day's going great! How can I assist you?<br>";
    } else if (hour >= 17 && hour < 21) {
        greeting = "<span style='color:#0074D9;'>Good evening</span><br>Let's wrap up the day with some creativity — how may I help?<br>";
    } else {
        greeting = "<span style='color:#0074D9;'>Good night</span><br>Have a peaceful night and come back refreshed for new ideas!<br>";
    }

    const dayMessages = {
        0: "<span style='color:#0074D9;'>Happy Sunday</span>, Relax and recharge!<br>",
        1: "<span style='color:#0074D9;'>Happy Monday</span>, Start the week strong!<br>",
        2: "<span style='color:#0074D9;'>Tuesday</span>, Keep up the great work!<br>",
        3: "<span style='color:#0074D9;'>Wednesday</span>, Halfway there, stay focused!<br>",
        4: "<span style='color:#0074D9;'>Thursday</span>, Almost the weekend!<br>",
        5: "<span style='color:#0074D9;'>Happy Friday</span>, Finish strong!<br>",
        6: "<span style='color:#0074D9;'>Saturday</span>, Enjoy your weekend!<br>"
    };

    const dayMessage = dayMessages[day] || "";

    return `${greeting} ${dayMessage}<span style='color:navy;'>Welcome to Balvirt Technologies!</span>`;
}

// ADD QUICK RESPONSE BUTTONS
function addQuickResponseButtons() {
    const quickQuestions = [
        "What services do you offer?",
        "How to contact?",
        "Web development",
        "Mobile app",
        "Careers",
        "AI solutions",
        "Pricing",
        "Project timeline"
    ];

    const quickHTML = `
        <div class="balvirt-quick-responses">
            <div style="font-size: 12px; color: #666; margin-bottom: 8px;">Quick Questions:</div>
            ${quickQuestions.map(q => `
                <button class="balvirt-quick-btn" data-question="${q.replace(/"/g, '&quot;')}">
                    ${q}
                </button>
            `).join('')}
        </div>
    `;

    return quickHTML;
}

// BUTTON SHOW/HIDE MANAGEMENT
function showChatbotButton() {
    const chatIcon = document.querySelector(".balvirt-chatbot-icon");
    if (chatIcon) {
        chatIcon.style.display = 'flex';
    }
}

function hideChatbotButton() {
    const chatIcon = document.querySelector(".balvirt-chatbot-icon");
    if (chatIcon) {
        chatIcon.style.display = 'none';
    }
}

// Main Chatbot Functionality
document.addEventListener("DOMContentLoaded", function () {
    initializeChatbot();
});

function initializeChatbot() {
    const chatIcon = document.querySelector(".balvirt-chatbot-icon");
    const chatBox = document.querySelector(".balvirt-chatbot-box");
    const closeBtn = document.querySelector(".balvirt-chatbot-close");
    const chatMessages = document.querySelector(".balvirt-chatbot-messages");
    const chatInput = document.querySelector(".balvirt-chatbot-input");
    const sendBtn = document.querySelector(".balvirt-chatbot-send");
    const typingIndicator = document.querySelector(".balvirt-chatbot-typing");
    const navTabs = document.querySelectorAll(".balvirt-chatbot-tab");

    let currentSection = "home";

    const draggableChatbot = new DraggableChatbot();

    loadSectionWithGreeting(currentSection);

    chatIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleChatbot();
    });

    closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeChatbot();
    });

    navTabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.stopPropagation();
            const section = this.getAttribute("data-section");
            switchSection(section, this);
        });
    });

    sendBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        sendMessage();
    });

    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.stopPropagation();
            sendMessage();
        }
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.balvirt-chatbot-box') && 
            !e.target.closest('.balvirt-chatbot-icon') &&
            !draggableChatbot.isDragging) {
            closeChatbot();
        }
    });

    setTimeout(function () {
        if (!sessionStorage.getItem('chatbotInteracted')) {
            openChatbot();
            sessionStorage.setItem('chatbotInteracted', 'true');
        }
    }, 5000);

    function toggleChatbot() {
        if (chatBox.classList.contains("balvirt-chatbot-hidden")) {
            openChatbot();
        } else {
            closeChatbot();
        }
    }

    function openChatbot() {
        hideChatbotButton();
        chatBox.classList.remove("balvirt-chatbot-hidden");
        setTimeout(() => {
            chatBox.classList.add("balvirt-chatbot-show");
            chatInput.focus();
            
            draggableChatbot.loadPosition();
        }, 10);
    }

    function closeChatbot() {
        showChatbotButton();
        chatBox.classList.remove("balvirt-chatbot-show");
        setTimeout(() => {
            chatBox.classList.add("balvirt-chatbot-hidden");
        }, 300);
    }

    function switchSection(section, tabElement) {
        navTabs.forEach(t => t.classList.remove("balvirt-chatbot-active"));
        tabElement.classList.add("balvirt-chatbot-active");

        currentSection = section;
        loadSectionWithGreeting(section);
    }

    function loadSectionWithGreeting(section) {
        chatMessages.innerHTML = '';
        addGreetingMessage();
        loadSectionQuestions(section);
        chatMessages.scrollTop = 0;
    }

    function addGreetingMessage() {
        const greetingHTML = `
            <div class="balvirt-chatbot-message balvirt-chatbot-bot-message">
                <div class="balvirt-chatbot-content">
                    <p><strong>${getTimeBasedGreeting()}</strong></p>
                    <p style="margin-top: 8px; font-size: 13px;">I'm the Balvirt Assistant — here to connect you with innovation.
Discover our solutions, explore services, or ask how we can help transform your ideas into reality.</p>
                    ${addQuickResponseButtons()}
                </div>
            </div>
        `;
        chatMessages.innerHTML += greetingHTML;

        initializeQuickButtons();
    }

    function loadSectionQuestions(section) {
        const sectionData = chatbotSections[section];
        if (sectionData) {
            addBotMessage(`<strong style="font-size: 15px;">${sectionData.title} Questions</strong><p style="margin: 6px 0 0 0; font-size: 13px;">Select a question below:</p>`, true);

            sectionData.questions.forEach(q => {
                const questionHTML = `
                    <div class="balvirt-chatbot-question-buttons">
                        <button class="balvirt-chatbot-question-btn" data-question="${q.question.replace(/"/g, '&quot;')}">
                            ${q.question}
                        </button>
                    </div>
                `;
                addBotMessage(questionHTML, true);
            });

            initializeQuestionButtons();
        }
    }

    function initializeQuickButtons() {
        chatMessages.removeEventListener('click', handleQuickButtonClick);
        chatMessages.addEventListener('click', handleQuickButtonClick);
    }

    function handleQuickButtonClick(e) {
        if (e.target.classList.contains('balvirt-quick-btn')) {
            e.stopPropagation();
            const question = e.target.textContent;
            askQuestion(question);
        }
    }

    function initializeQuestionButtons() {
        chatMessages.removeEventListener('click', handleQuestionButtonClick);
        chatMessages.addEventListener('click', handleQuestionButtonClick);
    }

    function handleQuestionButtonClick(e) {
        if (e.target.classList.contains('balvirt-chatbot-question-btn')) {
            e.stopPropagation();
            const question = e.target.getAttribute('data-question');
            askQuestion(question);
        }
    }

    // FIXED askQuestion FUNCTION - CLEAN RESPONSES
    function askQuestion(question) {
        if (chatInput.disabled) return;
        
        addUserMessage(question);
        showTyping();

        chatInput.disabled = true;
        sendBtn.disabled = true;

        setTimeout(() => {
            hideTyping();
            const result = findAnswer(question);

            let finalAnswer = "";

            if (result.isRepeat && result.repeatCount >= 3) {
                finalAnswer = repeatDetector.getRepeatMessage(question, result.repeatCount);
            }
            else if (result.type === 'spelling_corrected') {
                finalAnswer = result.answer;
            }
            else if (result.type === 'similarity' && result.similarity < 0.8) {
                finalAnswer = result.answer;
            }
            else if (result.type === 'not_found') {
                finalAnswer = result.answer;
            }
            else {
                finalAnswer = result.answer;
            }

            addBotMessage(finalAnswer, true);

            chatInput.disabled = false;
            sendBtn.disabled = false;
            chatInput.focus();

            console.log('Question Analysis:', {
                question,
                type: result.type,
                confidence: result.confidence,
                repeatCount: result.repeatCount,
                isRepeat: result.isRepeat,
                understanding: result.understanding
            });

        }, 1000);
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === "") return;

        askQuestion(message);
        chatInput.value = "";
    }

    function addUserMessage(text) {
        addMessage(text, 'balvirt-chatbot-user');
    }

    function addBotMessage(text, isHTML = false) {
        addMessage(text, 'balvirt-chatbot-bot', isHTML);
    }

    function addMessage(text, sender, isHTML = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `balvirt-chatbot-message ${sender}-message`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'balvirt-chatbot-content';

        if (isHTML) {
            contentDiv.innerHTML = text;
        } else {
            contentDiv.textContent = text;
        }

        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTyping() {
        typingIndicator.classList.remove("balvirt-chatbot-hidden");
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function hideTyping() {
        typingIndicator.classList.add("balvirt-chatbot-hidden");
    }
}

// Global functions
window.askQuestion = function (question) {
    const chatMessages = document.querySelector(".balvirt-chatbot-messages");
    const chatInput = document.querySelector(".balvirt-chatbot-input");

    if (chatMessages && chatInput) {
        const chatBox = document.querySelector(".balvirt-chatbot-box");
        if (chatBox.classList.contains("balvirt-chatbot-hidden")) {
            document.querySelector(".balvirt-chatbot-icon").click();
            setTimeout(() => {
                processQuestion(question);
            }, 500);
        } else {
            processQuestion(question);
        }
    }

    function processQuestion(q) {
        const chatMessages = document.querySelector(".balvirt-chatbot-messages");
        const typingIndicator = document.querySelector(".balvirt-chatbot-typing");

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'balvirt-chatbot-message balvirt-chatbot-user-message';
        userMessageDiv.innerHTML = `<div class="balvirt-chatbot-content">${q}</div>`;
        chatMessages.appendChild(userMessageDiv);

        typingIndicator.classList.remove("balvirt-chatbot-hidden");
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            typingIndicator.classList.add("balvirt-chatbot-hidden");
            const result = findAnswer(q);

            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'balvirt-chatbot-message balvirt-chatbot-bot-message';

            let finalAnswer = "";

            if (result.isRepeat && result.repeatCount >= 3) {
                finalAnswer = repeatDetector.getRepeatMessage(q, result.repeatCount);
            } else if (result.type === 'not_found') {
                finalAnswer = result.answer;
            } else {
                finalAnswer = result.answer;
            }

            botMessageDiv.innerHTML = `<div class="balvirt-chatbot-content">${finalAnswer}</div>`;
            chatMessages.appendChild(botMessageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
};

// Add CSS for enhanced features
const additionalCSS = `
.balvirt-quick-responses {
    margin: 15px 0 5px 0;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 10px;
    border: 1px solid #e9ecef;
}

.balvirt-quick-btn {
    background: white;
    border: 1px solid #007bff;
    color: #007bff;
    padding: 6px 12px;
    margin: 3px;
    border-radius: 15px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-block;
}

.balvirt-quick-btn:hover {
    background: #007bff;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0,123,255,0.3);
}

.balvirt-chatbot-question-btn {
    background: white;
    border: 1px solid #28a745;
    color: #28a745;
    padding: 8px 15px;
    margin: 5px;
    border-radius: 8px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
    display: block;
    width: 100%;
    text-align: left;
}

.balvirt-chatbot-question-btn:hover {
    background: #28a745;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(40,167,69,0.3);
}

.balvirt-suggestion-btn {
    background: none;
    border: none;
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    font-size: inherit;
}

.balvirt-suggestion-btn:hover {
    color: #0056b3;
}

.balvirt-chatbot-icon {
    display: flex !important;
}

.balvirt-chatbot-box {
    cursor: default;
}

.balvirt-chatbot-header {
    user-select: none;
    -webkit-user-select: none;
}

@media (max-width: 768px) {
    .balvirt-chatbot-header {
        cursor: default !important;
    }
}
`;

const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Smooth scroll detection for chatbot
let lastScrollTop = 0;
const chatbotIcon = document.querySelector('.balvirt-chatbot-icon');

if (chatbotIcon) {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 150 && lastScrollTop <= 150) {
            chatbotIcon.style.bottom = '120px';
            chatbotIcon.style.transform = 'scale(1.1)';
        } else if (scrollTop <= 150 && lastScrollTop > 150) {
            chatbotIcon.style.bottom = '20px';
            chatbotIcon.style.transform = 'scale(1)';
        }
        
        lastScrollTop = scrollTop;
    }, {passive: true});
}
console.log('Balvirt Chatbot Loaded with Fixed Answer Mapping! All questions now give correct answers.');