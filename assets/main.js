const fitnessA = [];fitnessA

class FitnessOb {
    constructor(name, description, video) {
        this.name = name;
        this.description = description;
        this.video = video;
    }
    
}

const basketball = new FitnessOb("Basketball", "Basketball not only burns calories it increases stamina, muscle strength, coordination, heart health, and flexibility. It is a fun way to stay in shape and lower stress. Not much is needed for you to get started as most places have a basketball court available in local parks. Let\’s play!!", "./assets/video/fitness/basketball.mp4")


const soccer = new FitnessOb("Soccer", "Playing soccer can boost heart health, lower body fat builds muscle, and improve coordination. This sport can also lower stress and improve relationships through team building. No team, no problem, you can play soccer drills and get all the benefits of playing soccer without additional players. A soccer ball and an open space are all that are needed to get started.", "./assets/video/fitness/soccer.mp4")
const biking = new FitnessOb("Biking", "Biking is a low-impact sport that still provides a good workout. The cyclist controls how intense the workout is. With a commitment to the sport, you will experience a boost in heart health, improved mobility, lower stress levels, increased coordination, and better flexibility and posture. Biking can be done outdoors or a stationary bike allows you to continue the sport no matter the weather. Please follow your local laws regarding safety and the use of helmets.", "./assets/video/fitness/biking.mp4")
const boxing = new FitnessOb("Boxing", "Boxing is a great sport to increase muscle, improve heart health, improve coordination, and lower body fat. With a commitment to the sport, you will experience an increase in endurance and happiness as well as sleep better at night. Caution when boxing with an opponent, boxing also has a risk of serious injury.", "./assets/video/fitness/boxing.mp4")
const homeWorkout = new FitnessOb("Home Workout", "Home-based workouts experienced a surge in popularity during the Covid pandemic and appear to be maintaining that progress. Working out at home has all of the same benefits as working out in a gym but in the comfort of your own home. Need a buddy, no worries, many of the coaches also have a substantial online community that you can be a part of.", "./assets/video/fitness/home fitness.mp4")
const rollerSkate = new FitnessOb("Roller Skate", "Ready for some fun! Roller skating and rollerblading increase muscle control, and heart health, lower body fat, and builds strength. With a commitment to this sport, you will experience a boost in endurance and an increase in leg strength. Be safe, helmets, wrist guards, and knee pads are a great way to prevent the most common injuries new skaters are prone to.", "./assets/video/fitness/rollerskate.mp4")
const running = new FitnessOb("Running or Jogging", "Running or jogging is a great way to improve heart health, lose body fat, and increase endurance. This sport requires little to get started. Just you, comfortable running sneakers, and the outdoors. This sport can also be done by jogging in place inside or using a treadmill. Nothing can replace the outdoors but a change in weather won\’t stop the show!", "./assets/video/fitness/running.mp4")
const swimming = new FitnessOb("Swimming", "Swimming is a fun activity that builds endurance, and muscle strength, and improves heart health. It is a low-impact sport that allows people with mobility issues to participate. While most cities have a local pool or communities that have a shared pool, local gyms may also have a pool for this activity.", "./assets/video/fitness/swimming.mp4")
const tennis = new FitnessOb ("Tennis","Tennis is a great way to improve heart health, lose body fat, and increase endurance. While some equipment is necessary, most cities have local parks or communities that have a court available for the sport.", "./assets/video/fitness/tennis.mp4")
const weights = new FitnessOb ("Weightlifting", "Lifting weights can be done at your local gym or within the comfort of your own home. Weightlifting increases metabolism, builds strength, burns fat, and burns more calories over time. Lifting weights will also improve heart health by lowering blood pressure and cholesterol.", "./assets/video/fitness/weights.mp4")

fitnessA.push(soccer, biking, boxing, homeWorkout, rollerSkate, running, swimming, tennis, weights, basketball);

const readingA = [];


class ReadingOb {
    constructor(name, authors, titles, video) {
        this.name = name;
        this.authors = authors;
        this.titles = titles;
        this.video = video;
    }
    
}

const romance = new ReadingOb ("Romance", "Carolyn Brown, Catherine Bybee, Robyn Carr, Alyssa Cole, Madison Faye", "Fifty Shades of Grey, The Kiss Quotient, The Selection, Breaking Dawn, The Notebook, Jane Eyre, One Last Stop", "./assets/video/Books/Romance.mp4")
const biography = new ReadingOb ("Biography and Autobiography", "Rebecca Skloot, Anne Frank, Mark Twain, Michelle Obama, Nelson Mandela, Alex Haley, Christina Lamb, Ernest Hemingway, Andre Agassi, Bob Dylan, Muhammad Ali", "Steve Jobs, The Immortal Life of Henrietta Lacks, Unbroken: A World War II Story of Survival, Resilience, and Redemption, Into the Wild, A Beautiful Mind, Alan Turing: The Enigma, Barracoon: The Story of the Last \"Black Cargo\", Enrique's Journey by Sonia Nazario", "./assets/video/Books/biography.mp4")
const business = new ReadingOb ("Business and Money", "Michael E. Gerber, Stephen R. Covey, Napoleon Hill, Tim Ferriss, Dale Carnegie, Gary Vaynerchuk","Thinking Fast and Slow, Business Adventures, How to win Friends & Influence People, The Intelligent Investor, Radical Candor, Good to Great, Grit: The Power of Passion and Perseverance", "./assets/video/Books/BusinessMoney.mp4")
const fantasy = new ReadingOb("Fantasy", "Robin Hobb, Neil Gaiman, George R. R. Martin, Brandon Sanderson, C.S. Lewis, Stephen King, Ursula K. Le Guin, Terry Pratchett, Sarah J. Maas, J.K. Rowling, Patrick Rothfuss", "Game of Thrones, The Fifth Season, The Name of the Wind, The Ways of the Kings, Assassin’s Apprentice, A Wizard of Earthsea, The Lord of the Rings, Harry Potter and the Sorcerer's Stone", "./assets/video/Books/Fantasy.mp4")
const horror = new ReadingOb("Horror", "Stephen King, Dean Koontz, Joe Hill, Clive Barker, Mary Shelley, Neil Gaiman, Anne Rice, Thomas Harris, Catriona Ward, Tim Waggoner, Linda Addison", "The Exorcist, Dracula, House of Leaves, Ghost Story, The Haunting of Hill House, It, The Shining, Frankenstein, I am Legend, Bird Box, Coraline, The Girl Next Door","./assets/video/Books/Horror.mp4")
const mystery = new ReadingOb("Mystery", "Stieg Larsson, Agatha Christie, Gillian Flynn, Tana French, Lee Child, Mystery Writers of America, Phyllis White, David Baldacci, Harlan Coben, Rex Stout, James Patterson, John Grisham","The Silent Patient, Gone Girl, The Big Sleep, Murder on the Orient Express, The Alienist, The Girl on the Train, Da Vinci Code, A Study in Scarlet, The Maid: A Novel, Still Life, Presumed Innocent, The Silence of the Lambs, Big Little Lies", "./assets/video/Books/Mystery.mp4")
const development = new ReadingOb("Personal Development", "Mark Manson, Brian Tracey, Tony Robbins, Don Miguel Ruiz, James Clear, Jim Rohn, Brendon Burchard, Rhonda Byrne, Jen Sincero, Les Brown, Erin Falconer", "Think and Grow Rich, The 7 Habits of Highly Effective People, Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones, The Power of Positive Thinking, Awaken the Giant Within, 12 Rules for Life, Courage to be Disliked, The Alchemist", "assets/video/Books/development.mp4")
const scienceFinction = new ReadingOb("Science Fiction", "Phillip K. Dick, Robert A. Heinlein, Larry Niven, Andy Weir, Lui Cixin, Martha Wells, Margaret Atwood, Douglas Adams, Samuel R Delany, Charlie Jane Anders, Michael Moorcock, Jeff VanderMeer", "The Ultimate Hitchhiker’s Guide, Neuromancer, Hyperion, Snow Crash, The Ware of the Worlds, Dune, Starship Troopers, The Martian Chronicles, The Handmaid\’s Tale, Kindred, I, Robot, Stranger in a Strange Land", "./assets/video/Books/ScienceFiction.mp4")
const trueCrime = new ReadingOb("True Crime", "Anne Rule, Dave Cullen, Truman Capote, Jon Krakauer, Susan Orlean, James Ellroy, Rabia Chaudry, Mikal Gilmore, Bryan Stevenson, Joseph Wambaugh, Sara Weinman, Chanel Miller, Becky Cooper, Rachel Rear", "In Cold Blood, Columbine, The Executioner’s Song, Say Nothing, The Innocent Man, American Predator, My Dark Places, Zodiac, Shot in the Heart, The Good Nurse: A True Story of Medicine, Madness, and Murder, The Night Stalker", "./assets/video/Books/truecrime.mp4")

readingA.push(romance, biography, business, fantasy, horror, mystery, development, scienceFinction, trueCrime);


const artA = [];

class ArtOb {
    constructor(name, description, video) {
        this.name = name;
        this.description = description;
        this.video = video;
    }
    
}

const painting = new ArtOb("Painting", "Create something new with painting. This activity can be done at home or at studios that host events for beginners. You can use YouTube as a source to learn techniques and take tutorials.", "./assets/video/Art/Painting.mp4")
const drawing = new ArtOb("Draw", "Drawing and sketching are activities that you can do at home but can easily travel with. You can use YouTube for free tutorials.", "./assets/video/Art/drawing.mp4");
const digitalGraphic = new ArtOb("Digital Art and Graphic Design", "Much like drawing or painting, this art form produces great pieces. However, the art is digital. This activity requires little to get started as you can use your smartphone, computer, or tablet. There are open-source software platforms that are excellent for beginners.", "./assets/video/Art/Digital.mp4");
const photography = new ArtOb("Photography", "Thanks to technology an expensive camera is no longer needed to take breathtaking photos. Most people can take the same caliber of photos with their smartphones. You can build upon the activity of Photography by incorporating crafts.", "./assets/video/Art/Photography.mp4");
const dance = new ArtOb("Dance", "Dance has always been an artistic form of self-expression. Let\’s put on some music! ", "./assets/video/Art/dance.mp4");
const creativeWrite = new ArtOb("Creative Writing", "Many different forms of writing provide an outlet for self-expression. Descriptive writing, journaling, and poetry are just a few.", "./assets/video/Art/typewriter.mp4");

artA.push(painting, drawing, digitalGraphic, photography, dance, creativeWrite);



const craftsA = [];

class CraftsOb {
    constructor(name, description, video) {
        this.name = name;
        this.description = description;
        this.video = video;
    }
    
}

const sewing = new CraftsOb("Sewing", "Sewing can be a relaxing and rewarding experience. YouTube is a great resource for learning and often there are courses given in the craft by local crafting stores.", "./assets/video/Crafts/sewing.mp4")
const knitting = new CraftsOb("Knitting", "An old-fashioned hobby but provides many challenges in technique and personal accomplishment when a project has been completed.", "./assets/video/Crafts/knitting.mp4")
const crocheting = new CraftsOb("Crocheting", "Crocheting is similar to knitting but is often thought of as an easier-to-learn alternative. However, the finished products are equally beautiful and rewarding.", "./assets/video/Crafts/crocheting.mp4")
const needlework = new CraftsOb("Needlework", "Needlework has similarities with sewing however, the products are more versatile. Most of the needlework can be for pillow decorations or wall art.", "./assets/video/Crafts/needlework.mp4")
const scrapbooking = new CraftsOb("Scrapbooking", "Scrapbooking can be incorporated with photography to create keepsakes. YouTube is a great resource for learning this craft.", "./assets/video/Crafts/scrapbooking.mp4")
const origami = new CraftsOb("Origami or Papercrafts", "Origami and paper grafts are ancient craft that takes something as simple as paper and turns it into art. YouTube is a great resource for this craft.", "./assets/video/Crafts/Origami.mp4")
const gardening = new CraftsOb("Gardening", "Gardening is not often thought of as a craft. However, it is a skill and with arrangements, it is absolutely a craft or skill.", "./assets/video/Crafts/gardening.mp4");
const jewelryMaking = new CraftsOb("Jewelry Making", "Jewelry making is fun and easy to learn. A beginner\’s kit is affordable and crafting stores allow you to purchase single pieces to build on that set and take on smaller projects at your own pace.", "./assets/video/Crafts/Jewelrymaking.mp4");

craftsA.push(sewing, knitting, crocheting, needlework, scrapbooking, origami, gardening, jewelryMaking);



const skillA = [];

class SkillOb {
    constructor(name, description, video) {
        this.name = name;
        this.description = description;
        this.video = video;
    }
    
}

const digitalLit = new SkillOb("Digital Literacy", "Understanding the world we live in as technology continues to change how we communicate and share information. There are many online platforms that can assist you in learning skills to increase digital literacy.", "./assets/video/skill/digitalliteracy.mp4");
const writtenComm = new SkillOb("Written Communication", "Learning more about written communication can benefit you in many areas of your professional and personal life. Increase your effectiveness in communication and open doors for you in your career.", "./assets/video/skill/writtencommunication.mp4");
const publicSpeaking = new SkillOb("Public Speaking", "Public speaking is unavoidable in a professional career. Take some time to prepare and increase your likelihood of success.", "./assets/video/skill/publicspeaking.mp4");
const selfManage = new SkillOb("Self-Management", "Take some time to learn about personal finance management, debt management, saving, and investing to make your life easier.", "./assets/video/skill/selfmanagement.mp4")
const cooking = new SkillOb("Cooking", "I believe cooking is an art and a skill. The possibilities are endless as are the resources to find new recipes to try. Invites some people over, let\’s make it a party. Bon Appetit!", "./assets/video/skill/cooking.mp4");
const webDevelopment = new SkillOb("Web Development", "Ever wonder how the internet works and what it takes to make interactive and informative web pages? Take a moment to learn the basics of web development.", "./assets/video/skill/webdevelopment.mp4");
const language = new SkillOb("Learn a new Lanaguage", "No time like the present. Learn a new language! Learning a new language can be fun and beneficial in your career.", "./assets/video/skill/newlanguage.mp4");
const criticalThinking = new SkillOb("Critical Thinking","Critical thinking is necessary for all businesses. It can make the difference between success and certain failures. A great skill to choose as your new hobby.", "./assets/video/skill/criticalthinking.mp4");
const dataAnalysis = new SkillOb("Data Analysis", "Data analysis positions are increasing as understanding and leveraging Big Data has become necessary for success. Learning the basics and building upon those fundamentals will open professional opportunities.", "./assets/video/skill/dataAnalytics.mp4");
const research = new SkillOb("Research Skills", "Learning research skills will make you successful in all areas of your life. Many learning platforms can assist you in your learning. Many of these platforms are free to use.", "./assets/video/skill/Research.mp4");



skillA.push(digitalLit, writtenComm, publicSpeaking, selfManage, cooking, webDevelopment, language, criticalThinking, dataAnalysis, research);


const musicA = [];

class MusicOb {
    constructor(name, description, video) {
        this.name = name;
        this.description = description;
        this.video = video;
    }
    
}

const piano = new MusicOb("Play the Piano", "The use of applications and YouTube have made it easier to learn how to play the piano. You can even learn how to play without owning a piano.", "./assets/video/Music/piano.mp4");
const guitar = new MusicOb("Play the Guitar", "Learn how to play the guitar! Applications have made it easier to learn how to play, even before you obtain a guitar.", "./assets/video/Music/guitar.mp4");
const sing = new MusicOb("Singing", "Sing a song! If you love to sing, take some online lessons, or learn on YouTube.", "./assets/video/Music/singing.mp4");
const karaoke = new MusicOb("Karaoke", "Find your local karaoke spots. Invite some friends and make it a night!", "./assets/video/Music/karoke.mp4");
const listen = new MusicOb("Listen to Music", "Take some time and listen to music. On your way to work, while you are working or completing household chores. Listening to music helps with stress and mental functioning. Try a new genre!", "./assets/video/Music/listentomusic.mp4");
const writeSong = new MusicOb("Write a Song", "Writing a song is a lot like poetry. Why not put those creative writing skills to use?", "./assets/video/Music/writeasong.mp4");
const virtualListen = new MusicOb("Listening Party", "Invite some friends over for a listening party. Can’t make it, how about a virtual listening party? Introduce some of your favorite songs to friends. Open a conversation about the songs you listen to.", "./assets/video/Music/listenparties.mp4");
const meditate = new MusicOb("Meditate to Music", "Meditating has proven benefits in stress management and mood-boosting. However, adding music to the session could inspire better results and make the activity more enjoyable.", "./assets/video/Music/meditation.mp4");

musicA.push(piano, guitar, sing, karaoke, listen, writeSong, virtualListen, meditate);


window.addEventListener("load", ()=> {
    const newForm = document.querySelector("#newForm");
    const fitness = document.querySelector("#fitness");
    const reading = document.querySelector("#reading");
    const art = document.querySelector("#art");
    const crafts = document.querySelector("#crafts");
    const skill = document.querySelector("#skill");
    const music = document.querySelector("#music");







newForm.addEventListener('submit', (e) => {
    e.preventDefault();


  

    musicRadio = document.getElementById("music");
    fitnessRadio = document.getElementById("fitness");
    readingRadio = document.getElementById("reading");
    artRadio = document.getElementById("art");
    craftsRadio = document.getElementById("crafts");
    skillRadio = document.getElementById("skill");
    let selectionItem =""

    if(fitnessRadio.checked == true) {
        document.getElementById('fitContainer').style.display = "flex";
        document.getElementById('readingContainer').style.display = "none";
        document.getElementById('musicContainer').style.display = "none";
        document.getElementById('craftsContainer').style.display = "none";
        document.getElementById('skillContainer').style.display = "none";
        document.getElementById('artContainer').style.display = "none"; 
        selectionItem = "fitness";
    } if (readingRadio.checked == true) {
        document.getElementById('readingContainer').style.display = "flex";
        document.getElementById('fitContainer').style.display = "none";
        document.getElementById('musicContainer').style.display = "none";
        document.getElementById('craftsContainer').style.display = "none";
        document.getElementById('skillContainer').style.display = "none";
        document.getElementById('artContainer').style.display = "none";
        selectionItem = "reading";
    } if (artRadio.checked == true) {
        document.getElementById('artContainer').style.display = "grid";
        document.getElementById('readingContainer').style.display = "none";
        document.getElementById('musicContainer').style.display = "none";
        document.getElementById('craftsContainer').style.display = "none";
        document.getElementById('skillContainer').style.display = "none";
        document.getElementById('fitContainer').style.display = "none";
        selectionItem = "art";
    } if (craftsRadio.checked == true) {
        document.getElementById('craftsContainer').style.display = "flex";
        document.getElementById('readingContainer').style.display = "none";
        document.getElementById('musicContainer').style.display = "none";
        document.getElementById('fitContainer').style.display = "none";
        document.getElementById('skillContainer').style.display = "none";
        document.getElementById('artContainer').style.display = "none";
        selectionItem ="crafts";
    } if (skillRadio.checked == true) {
        document.getElementById('skillContainer').style.display = "flex";
        document.getElementById('readingContainer').style.display = "none";
        document.getElementById('musicContainer').style.display = "none";
        document.getElementById('fitContainer').style.display = "none";
        document.getElementById('craftsContainer').style.display = "none";
        document.getElementById('artContainer').style.display = "none";
        selectionItem = "skill";
    } if (musicRadio.checked == true) {
        document.getElementById('musicContainer').style.display = "flex";
        document.getElementById('readingContainer').style.display = "none";
        document.getElementById('craftsContainer').style.display = "none";
        document.getElementById('fitContainer').style.display = "none";
        document.getElementById('skillContainer').style.display = "none";
        document.getElementById('artContainer').style.display = "none";
        selectionItem = "music";
    }

    

    const startingMessage = `Great! You have selected ${selectionItem}. Click the start button for a suggestion.`    
    const row = document.createElement("div");
    const generate = document.createElement("div");
    const result = document.createElement("div");
    const start = document.createElement('button');
    const start1 = document.createElement("div");
    const moreInfo = document.createElement('button');
    const action = document.createElement("div");
    const videodiv = document.createElement("div");
    const video = document.createElement("video");
    const gen = document.createElement("div")
    const fitArticle = document.getElementById("fitArticle");
    const musArticle = document.getElementById("musArticle");
    const skiArticle = document.getElementById("skiArticle");
    const craArticle = document.getElementById("craArticle");
    const artArticle = document.getElementById("artArticle");
    const reaArticle = document.getElementById("reaArticle");
    
    
    
    row.classList.add("GenContainer")
    generate.classList.add("introPhoto");
    action.classList.add("firstStarting")
    generate.setAttribute("id", "ranGen");
    result.classList.add("resultDisplay");
    result.setAttribute("id", "resDis");
    start.setAttribute("id", "start");
    start.classList.add("buttonT");
    moreInfo.setAttribute("id", "moreInfo");
    start1.classList.add("buttonDiv")
    videodiv.classList.add("videoContainer")
    
    

    
    start.innerHTML = "Click to Start";
    moreInfo.innerHTML = "Know more";
    
    if (fitnessRadio.checked && fitArticle.innerHTML == "") {
        fitArticle.appendChild(row);
        row.appendChild(action);
        fitArticle.appendChild(generate);  
        action.innerHTML = startingMessage;
        action.appendChild(start1);
        start1.appendChild(start);
        
                
    } else if (readingRadio.checked && reaArticle.innerHTML == "") {
        reaArticle.appendChild(row);
        row.appendChild(action);
        reaArticle.appendChild(generate);  
        action.innerHTML = startingMessage;
        action.appendChild(start1);
        start1.appendChild(start);        
    } else if (artRadio.checked && artArticle.innerHTML == "") {
        artArticle.appendChild(row);
        row.appendChild(action);
        artArticle.appendChild(generate);  
        action.innerHTML = startingMessage;
        action.appendChild(start1);
        start1.appendChild(start);
     } else if (craftsRadio.checked  && craArticle.innerHTML == "") {
        craArticle.appendChild(row);
        row.appendChild(action);
        craArticle.appendChild(generate);  
        action.innerHTML = startingMessage;
        action.appendChild(start1);
        start1.appendChild(start);
    } else if (skillRadio.checked && skiArticle.innerHTML == "") {
        skiArticle.appendChild(row);
        row.appendChild(action);
        skiArticle.appendChild(generate);  
        action.innerHTML = startingMessage;
        action.appendChild(start1);
        start1.appendChild(start);
    } else if (musicRadio.checked && musArticle.innerHTML == "") {
        musArticle.appendChild(row);
        row.appendChild(action);
        musArticle.appendChild(generate);  
        action.innerHTML = startingMessage;
        action.appendChild(start1);
        start1.appendChild(start);
    }
    
    start.addEventListener("click", e => {
        e.preventDefault();
        
        if (selectionItem == "fitness") {
            action.className = "starting";
            generate.className = "randomGenerator";
            let randomNum = Math.floor(Math.random() * fitnessA.length)
            let item = fitnessA[randomNum];
            let activeName = item.name;
            let activeDes = item.description;
            let videoSrc = item.video;
    
        generate.appendChild(videodiv);
        videodiv.appendChild(video)
        video.src = videoSrc.toString();
        video.muted = true;
        video.autoplay = true;
        video.loop = true;

        action.innerHTML = `<h2 class= "innerDes">${activeName}</h2><div class= "scrollItem"><article class= "itemInfo">${activeDes}</article></div>`;
        action.appendChild(start1);
        start1.appendChild(start);
        
    
    
        } if (selectionItem == "reading") {
                action.className = "starting";
                generate.className = "randomGenerator";
                let randomNum = Math.floor(Math.random() * readingA.length)
                let item = readingA[randomNum];
                let activeName = item.name;
                let activeDes = item.authors;
                let activeTitle = item.titles;
                let videoSrc = item.video;

                
                

                generate.appendChild(videodiv);
                videodiv.appendChild(video);
                video.src = videoSrc.toString();
                video.muted = true;
                video.autoplay = true;
                video.loop = true;
        
                action.innerHTML = `<h2>${activeName}</h2><br> <div class= "scrollItem"><article class= "itemInfo"> <span class= "innerDes">Some popular authors are:</span> ${activeDes} <br> <span class= "innerDes">These are some popular titles: </span>${activeTitle}</article></div>`;
                action.appendChild(start1);
                start1.appendChild(start);
                active.scrollTop(0,0);

        } if (selectionItem == "art") {
            action.className = "starting";
            generate.className = "randomGenerator";
            let randomNum = Math.floor(Math.random() * artA.length)
            let item = artA[randomNum];
            let activeName = item.name;
            let activeDes = item.description;
            let videoSrc = item.video;
    
            generate.appendChild(videodiv);
            videodiv.appendChild(video);
            video.src = videoSrc.toString();
            video.muted = true;
            video.autoplay = true;
            video.loop = true;

            action.innerHTML = `<h2 class= "innerDes">${activeName}</h2><br> <div class= "scrollItem"><article class= "itemInfo">${activeDes}</article></div>`;
            action.appendChild(start1);
            start1.appendChild(start);

        } if (selectionItem == "crafts") {
            action.className = "starting";
            generate.className = "randomGenerator";
            let randomNum = Math.floor(Math.random() * craftsA.length)
            let item = craftsA[randomNum];
            let activeName = item.name;
            let activeDes = item.description;
            let videoSrc = item.video;
        
            generate.appendChild(videodiv);
            videodiv.appendChild(video);
            video.src = videoSrc.toString();
            video.muted = true;
            video.autoplay = true;
            video.loop = true;
    
            action.innerHTML = `<h2 class= "innerDes">${activeName}</h2><br> <div class= "scrollItem"><article class= "itemInfo">${activeDes}</article></div>`;
            action.appendChild(start1);
            start1.appendChild(start);

            } if (selectionItem == "skill") {
                action.className = "starting";
                generate.className = "randomGenerator";
                let randomNum = Math.floor(Math.random() * skillA.length)
                let item = skillA[randomNum];
                let activeName = item.name;
                let activeDes = item.description;
                let videoSrc = item.video;
            
                generate.appendChild(videodiv);
                videodiv.appendChild(video);
                video.src = videoSrc.toString();
                video.muted = true;
                video.autoplay = true;
                video.loop = true;
        
                action.innerHTML = `<h2 class= "innerDes">${activeName}</h2><br> <div class= "scrollItem"><article class= "itemInfo">${activeDes}</article></div>`;
                action.appendChild(start1);
                start1.appendChild(start);

                } if (selectionItem == "music") {
                    action.className = "starting";
                    generate.className = "randomGenerator";
                    let randomNum = Math.floor(Math.random() * musicA.length)
                    let item = musicA[randomNum];
                    let activeName = item.name;
                    let activeDes = item.description;
                    let videoSrc = item.video;
                
                    generate.appendChild(videodiv);
                    videodiv.appendChild(video);
                    video.src = videoSrc.toString();
                    video.muted = true;
                    video.autoplay = true;
                    video.loop = true;
            
                    action.innerHTML = `<h2 class= "innerDes">${activeName}</h2><br><div class= "scrollItem"><article class= "itemInfo">${activeDes}</article></div>`;
                    action.appendChild(start1);
                    start1.appendChild(start);
                    }
    })
   e.target.reset(); 
 
})







})


