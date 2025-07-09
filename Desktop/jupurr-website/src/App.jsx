import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { motion } from 'framer-motion'
import './App.css'

// Import assets
import jupurrHero from './assets/415e4207-d4a5-456c-8f47-371562fbc863.jpeg'
import microwaveExplosion from './assets/6fb2148a-3fdf-4681-b3b2-c43876a573ae.jpeg'
import jupurrWormhole from './assets/f6c696e4-def0-4a99-8c33-f92cecb7f54b.jpeg'
import microwaveBurrito from './assets/05f44c71-2a82-41ee-9e80-96c1bb2ea5bf.jpeg'
import jupurrCloseup from './assets/5bb6f65e-5846-401d-a5c3-b913cc5344ae.jpeg'
import jupurrVideo from './assets/ecc16e34-fea7-4e1d-80d3-7c76e54fb36a.mp4'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            src={jupurrHero} 
            alt="Jupurr Hero" 
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 text-lg px-6 py-2 bg-orange-500/20 text-orange-300 border-orange-500/30">
              😺💨 MEMECOIN
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            JUPURR
          </motion.h1>


          
          <motion.p 
            className="text-2xl md:text-3xl mb-8 text-orange-200 font-medium"
            variants={fadeInUp}
          >
            "I didn't launch. I slipped out."
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Join the Purr-ty 🚀
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Origin Story Section */}
      <motion.section 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            THE ORIGIN OF JUPURR 😺💨
          </motion.h2>


          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={fadeInUp}>
              <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Once upon a liquidity fart, Weremeow microwaved a burrito inside the Jupiter core engine room. 
                    The radiation mixed with leftover cat hair, some unvested JUP tokens, and exactly one very 
                    suspicious can of expired Fancy Feast.
                  </p>
                  <p className="text-2xl font-bold text-orange-400 mt-6 text-center">
                    BOOM. 💥
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <img 
                src={microwaveBurrito} 
                alt="Microwave with burrito" 
                className="rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <img 
                src={microwaveExplosion} 
                alt="Microwave explosion" 
                className="rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-gray-200">
                    A furball the size of Texas launched itself out of the wormhole and crash-landed 
                    in the middle of the Jupiter Studio dashboard.
                  </p>
                  <div className="mt-6 space-y-2">
                    <p className="text-orange-400 font-semibold">The devs screamed. 😱</p>
                    <p className="text-green-400 font-semibold">The server meowed. 😸</p>
                    <p className="text-yellow-400 font-semibold text-xl">And $JUPURR was born. ⭐</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <img 
              src={jupurrWormhole} 
              alt="Jupurr emerging from wormhole" 
              className="rounded-lg shadow-2xl w-full max-w-3xl mx-auto hover:scale-105 transition-transform duration-300 mb-12"
            />
          </motion.div>


        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            🧪 JUPURR'S BIO
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-center mb-16 text-orange-200 font-medium"
            variants={fadeInUp}
          >
            "Name's Jupurr. I'm part cat, part gas giant, all problem."
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <img 
                src={jupurrCloseup} 
                alt="Jupurr closeup" 
                className="rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                {[
                  { icon: "🐱", text: "Head of a cat" },
                  { icon: "🌐", text: "Body of the planet Jupiter" },
                  { icon: "🧼", text: "Wears a helmet because the fumes are legally considered a biohazard" },
                  { icon: "💨", text: "Purrs at 432,000 decibels — enough to break Raydium" },
                  { icon: "🪀", text: "Tail draws perfect Fibonacci retracements (but only by accident)" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-gray-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Jupurr Cat Images - Under Bio Section */}
          <motion.div
            className="flex flex-col md:flex-row gap-10 justify-center items-center mb-20"
            variants={fadeInUp}
          >
            <img
              src="/im2.jpeg"
              alt="Jupurr Cat Hologram Surprised"
              className="w-full max-w-3xl object-contain rounded-2xl shadow-2xl bg-black/30"
            />
            <img
              src="/im3.jpeg"
              alt="Jupurr Cat Hologram Happy"
              className="w-full max-w-3xl object-contain rounded-2xl shadow-2xl bg-black/30"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Relationship with Uranus Section */}
      <motion.section 
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            🧻 RELATIONSHIP WITH URANUS
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-center mb-16 text-blue-200 font-medium"
            variants={fadeInUp}
          >
            "Uranus? Please. That guy launched with a toilet paper supply of 420 million. He's not a planet. He's a buttcoin."
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏠</span>
                      <span className="text-lg text-gray-200">$URANUS is his sworn rival and roommate.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚀</span>
                      <span className="text-lg text-gray-200">They live together on Solana's Launchpad Floor 2B.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚽</span>
                      <span className="text-lg text-gray-200">Uranus keeps clogging the liquidity pipes. Jupurr eats the clogs.</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌯</span>
                      <span className="text-lg text-gray-200">They once fought for 6 hours over a Crunchwrap Supreme.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <video 
                      src={jupurrVideo} 
                      autoPlay 
                      loop 
                      muted 
                      className="rounded-lg shadow-2xl max-w-full h-auto"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-16 px-4 bg-black/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Ready to Join the JUPURR Revolution?
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            No CA yet, but the purr-fect storm is brewing. Stay tuned for the most chaotic launch in crypto history.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold"
            >
              Follow on Twitter 🐦
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
            >
              Join Telegram 💬
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 JUPURR. All rights reserved. Not financial advice. DYOR. 
              <br />
              This is a meme. Don't take it seriously. But also, maybe do? 😺
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App

