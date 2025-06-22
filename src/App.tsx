import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, ExternalLink, Download, Menu, X, FileText, Award, Briefcase, Code, Database, Brain, TrendingUp, Shield, BarChart3 } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'Python & Machine Learning', level: 95 },
    { name: 'LLMs & Generative AI', level: 90 },
    { name: 'Data Engineering & Cloud', level: 85 },
    { name: 'Statistical Analysis', level: 90 },
    { name: 'Product Analytics', level: 85 },
    { name: 'MLOps & Deployment', level: 80 },
  ];

  const projects = [
    {
      title: 'Kotori.ai - Agentic AI for Empty Nest Syndrome',
      description: 'Built a RAG chatbot processing 1,000+ pages of resources with agentic workflows for empathetic dialogue and therapeutic guidance. Achieved >3.5/5 satisfaction scores through behavioral evaluation pipeline.',
      tech: ['Python', 'LangChain', 'Streamlit', 'ChromaDB'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <Brain size={24} />,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ForensicOps: MLOps for Forensic Audit',
      description: 'Complete MLOps solution detecting financial anomalies in 2.2M+ insurance claims using Benford\'s Law with 80% accuracy. Full CI/CD pipeline with monitoring and reproducible deployments.',
      tech: ['Scikit-learn', 'Airflow', 'MLflow', 'Docker', 'Prometheus', 'Grafana'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <Shield size={24} />,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ForeXplorer - Forex Arbitrage Pipeline',
      description: 'Automated ETL pipeline processing 1.3M+ OHLC records with graph algorithms for arbitrage detection. Discovered 7 major currency clusters using centrality analysis.',
      tech: ['Azure', 'PySpark', 'Databricks', 'Neo4j', 'Power BI'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <TrendingUp size={24} />,
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'StorePulse: B2B Product Analytics & Customer Insights',
      description: 'Snowflake-based retail data warehouse with automated ETL workflows. Built interactive dashboards tracking revenue, loyalty performance, and customer retention trends.',
      tech: ['Snowflake', 'Power BI', 'Python', 'SQL', 'Pandas'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <BarChart3 size={24} />,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'PortOpt: Portfolio Risk Metrics',
      description: 'Portfolio optimization tool using Hierarchical Risk Parity and Efficient Frontier methods. Achieved 45.8% return with Sharpe ratio of 1.16 through strategic asset allocation.',
      tech: ['Python', 'PyPortfolioOpt', 'TensorFlow', 'Seaborn'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <TrendingUp size={24} />,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Temporal Profiling of European Honeypots',
      description: 'Analyzed 26k+ network flow records from SSH honeypots using unsupervised ML. Detected port scanning and suspicious behaviors with 75%+ accuracy, reducing false positives by 30%.',
      tech: ['SHAP', 'Darts', 'Folium', 'HDBSCAN', 'Statsmodels'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <Shield size={24} />,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'RLTrader: Stock Trading with Reinforcement Learning',
      description: 'AI-powered trading agent using Deep Q-Network with LSTM neural network. Implemented RL framework for optimal buy/sell/hold decisions to maximize cumulative profit.',
      tech: ['Python', 'TensorFlow', 'Yahoo Finance', 'DQN', 'LSTM'],
      link: 'https://github.com/HarshiniAiyyer',
      icon: <Brain size={24} />,
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const experience = [
    {
      company: 'Hydratech ICT Solutions',
      role: 'Data Science & Analytics Engineer',
      period: '2024 – Present',
      location: 'Remote',
      achievements: [
        'Developed ML-powered pricing system for 10,000+ rental properties',
        'Built behavioral analytics models for guest booking patterns',
        'Created KPI dashboards for 1,000+ property owners'
      ]
    },
    {
      company: 'Equinix',
      role: 'Data & Analytics',
      period: '2023 – 2024',
      location: 'Bengaluru, India',
      achievements: [
        'Applied statistical methods on 1.5M+ row datasets',
        'Developed forecasting models across 15+ categories',
        'Built dashboards for 50+ stakeholders, reducing bottlenecks by 15%'
      ]
    }
  ];

  const publications = [
    {
      title: 'Cryptocurrency and Associated Bourse Analysis using ML and Knowledge Graphs',
      venue: 'IEEE IPACT 2021',
      award: 'Best Paper Award for Computing category',
      year: '2021'
    },
    {
      title: 'Deciphering crypto-financial media diets: crafting ontologies for insights',
      venue: 'IEEE ACCAI 2024',
      award: null,
      year: '2024'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-serif">
                Harshini K Aiyyer
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Contact</button>
              </div>

              <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                  <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Home</button>
                  <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">About</button>
                  <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Skills</button>
                  <button onClick={() => scrollToSection('experience')} className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Experience</button>
                  <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Projects</button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium">Contact</button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">
                Harshini K Aiyyer
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Product-focused Data Scientist & AI Technologist building ML-powered systems, agentic AI tools, and user-centric analytics dashboards
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg font-medium transition-colors flex items-center gap-3"
                >
                  Get In Touch
                  <Mail size={18} />
                </button>               
                <a 
                  href="https://drive.google.com/file/d/1-3JIhxCYphzMUEXjBOk0VguWWlDze8UT/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 rounded-lg font-medium transition-colors flex items-center gap-3"
                >
                  View 1-Page Resume**
                  <FileText size={18} />
                </a>
              </div>
              
              <div className="text-right max-w-4xl mx-auto">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  **contains selected projects
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">About Me</h2>
              <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">AI Technologist & Data Scientist</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  I'm a product-focused data scientist with hands-on experience in building ML-powered systems, 
                  agentic AI tools, and user-centric analytics dashboards. My passion lies in designing end-to-end 
                  pipelines that translate messy data into actionable insights and intuitive user experiences.
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                  With a strong foundation in LLMs, behavioral analytics, forecasting, and MLOps, I bring a builder 
                  mindset with a deep commitment to ethical AI and creating impactful products that solve real-world problems.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">AI & ML</h4>
                    <p className="text-gray-600 dark:text-gray-400">LangChain, TensorFlow, Scikit-learn, Hugging Face</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">Data Engineering</h4>
                    <p className="text-gray-600 dark:text-gray-400">Azure, Databricks, Apache Spark, MongoDB</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 dark:bg-gray-100 p-12 rounded-2xl text-white dark:text-gray-900">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-serif font-semibold mb-2">3.7M+</div>
                    <div className="text-lg">Records Processed</div>
                  </div>
                  
                  <div>
                    <div className="text-4xl font-serif font-semibold mb-2">15+</div>
                    <div className="text-lg">Forecasting Categories</div>
                  </div>
                  
                  <div>
                    <div className="text-4xl font-serif font-semibold mb-2">2</div>
                    <div className="text-lg">IEEE Publications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">Technical Skills</h2>
              <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Core technologies and tools I use to build intelligent systems and data-driven solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-xl text-gray-900 dark:text-gray-100">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gray-900 dark:bg-gray-100 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">AI & LLMs</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  LangChain, ChromaDB, FAISS, MCP Protocols, A2A Protocols, CrewAI, Hugging Face, Ollama, LoRA, Prompt Engineering, RAG, Agentic AI
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Programming & Tools</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Python, R, SQL, Git, Docker, Jupyter, MongoDB, Neo4j
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Machine Learning & Modeling</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Scikit-learn, TensorFlow, Regression, Classification, Clustering, Time Series Forecasting, A/B Testing, Hypothesis Testing, Recommender Systems
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Data Science & GenAI</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Statistics, NLP, Generative AI, Knowledge Graphs, Behavior Modeling, Data Storytelling
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Data Engineering & Cloud</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Apache Spark (PySpark), Azure, Databricks, BigQuery, RESTful APIs
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Visualization & Reporting</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Power BI, Tableau, Streamlit
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Product & Collaboration</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Agile, UX Testing, Confluence, End-to-End Prototyping, Feedback Loops, Stakeholder Communication
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Soft Skills</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Leadership, Problem Solving, Teamwork, Presentation, Cross-Functional Collaboration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">Work Experience</h2>
              <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-2">{exp.role}</h3>
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.period}</p>
                      <p className="text-gray-500 dark:text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Publications Section */}
            <div className="mt-20">
              <h3 className="text-3xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100 text-center">Publications & Patents</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Award className="text-gray-600 dark:text-gray-400 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">{pub.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">{pub.venue} • {pub.year}</p>
                        {pub.award && (
                          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{pub.award}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">Featured Projects</h2>
              <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                A comprehensive showcase of AI, ML, and data engineering projects demonstrating end-to-end technical expertise
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors">
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">Let's Connect</h2>
              <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto mb-8"></div>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Interested in collaborating on AI projects or discussing data science opportunities? I'd love to hear from you.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-3xl font-serif font-semibold mb-8 text-gray-900 dark:text-gray-100">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                    Whether you're looking to discuss AI/ML projects, data science opportunities, or just want to 
                    connect with a fellow technologist, I'm always open to meaningful conversations.
                  </p>
                  
                  <div className="space-y-6">
                    <a href="mailto:harshini.k.aiyyer@gmail.com" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <Mail className="text-gray-600 dark:text-gray-400" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">Email</div>
                        <div className="text-gray-600 dark:text-gray-400">harshini.k.aiyyer@gmail.com</div>
                      </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/harshini-a-29870b342/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <Linkedin className="text-gray-600 dark:text-gray-400" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</div>
                        <div className="text-gray-600 dark:text-gray-400">linkedin.com/in/harshini-aiyyer</div>
                      </div>
                    </a>
                    
                    <a href="https://github.com/HarshiniAiyyer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <Github className="text-gray-600 dark:text-gray-400" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">GitHub</div>
                        <div className="text-gray-600 dark:text-gray-400">github.com/HarshiniAiyyer</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-10 rounded-xl border border-gray-200 dark:border-gray-700">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-900 dark:text-gray-100">Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-gray-100" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-900 dark:text-gray-100">Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-gray-100" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-900 dark:text-gray-100">Message</label>
                      <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-colors resize-none text-gray-900 dark:text-gray-100"></textarea>
                    </div>
                    
                    <button type="submit" className="w-full px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 rounded-lg font-medium transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-3xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Harshini K Aiyyer
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Data Scientist & AI Technologist
            </p>
            <div className="flex justify-center space-x-8 mb-10">
              <a href="https://github.com/HarshiniAiyyer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/harshini-a-29870b342/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:harshini.k.aiyyer@gmail.com" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              © 2025 Harshini K Aiyyer. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;