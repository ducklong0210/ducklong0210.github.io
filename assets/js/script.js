document.addEventListener('DOMContentLoaded', () => {
    // Language content object
    const content = {
        default: {
            siteSlogan: 'Programmer & Game Developer',
            aboutMeTitle: 'About Me',
            introRole: 'Sinh viên & Lập trình viên về Game',
            introDesc: `Tôi là sinh viên tại Học viện Nông nghiệp Việt Nam, chuyên ngành Công nghệ Phần mềm.<br>
                        Đam mê lập trình, đặc biệt là phát triển game và trải nghiệm người dùng.<br>
                        Luôn tìm kiếm cơ hội thực tập, dự án để học hỏi và đóng góp cho cộng đồng công nghệ.`,
            skillsTitle: 'Skills',
            programmingLanguages: 'Ngôn ngữ lập trình',
            frontEnd: 'Front-End',
            backEndDb: 'Back-End & Database',
            toolsSoftSkills: 'Công cụ & Skills mềm',
            teamwork: 'Teamwork',
            communication: 'Communication',
            projectsTitle: 'Featured Projects',
            project1Title: 'Website Computer',
            project1Desc: `Tôi đã phát triển và thiết kế một trang web sử dụng HTML, CSS, JavaScript và Bootstrap, lưu trữ trên GitHub Pages, để thực hành Skills lập trình front-end. Hiện tại, tôi đang phát triển giao diện (front-end) cho một website bán máy tính, tập trung vào thiết kế trải nghiệm người dùng và bố cục hiển thị sản phẩm.`,
            project2Title: 'App Books',
            project2Desc: `Tôi đã phát triển một ứng dụng Windows Forms bằng C# để xây dựng giao diện người dùng cho một cửa hàng bán máy tính. Ứng dụng cho phép người dùng duyệt sản phẩm, xem thông số kỹ thuật và mô phỏng trải nghiệm mua hàng. Dự án tập trung vào thiết kế giao diện người dùng (UI/UX) và đóng vai trò như một nguyên mẫu cho phiên bản máy tính để bàn của một website thương mại điện tử.`,
            projectLink: 'Check it out!',
            myCvVn: 'My CV Vietnamese',
            myCvEng: 'My CV English',
            footerText: '&copy; 2025 Nguyễn Đức Long. All rights reserved.',
        },
        vn: {
            siteSlogan: 'Lập trình viên & Nhà phát triển Game',
            aboutMeTitle: 'Về Tôi',
            introRole: 'Sinh viên & Lập trình viên về Game',
            introDesc: `Tôi là sinh viên tại Học viện Nông nghiệp Việt Nam, chuyên ngành Công nghệ Phần mềm.<br>
                        Đam mê lập trình, đặc biệt là phát triển game và trải nghiệm người dùng.<br>
                        Luôn tìm kiếm cơ hội thực tập, dự án để học hỏi và đóng góp cho cộng đồng công nghệ.`,
            skillsTitle: 'Kỹ Năng',
            programmingLanguages: 'Ngôn ngữ lập trình',
            frontEnd: 'Front-End',
            backEndDb: 'Back-End & Cơ sở dữ liệu',
            toolsSoftSkills: 'Công cụ & Kỹ năng mềm',
            teamwork: 'Làm việc nhóm',
            communication: 'Giao tiếp',
            projectsTitle: 'Dự Án Nổi Bật',
            project1Title: 'Website Máy Tính',
            project1Desc: `Tôi đã phát triển và thiết kế một trang web sử dụng HTML, CSS, JavaScript và Bootstrap, được lưu trữ trên GitHub Pages, để thực hành các kỹ năng lập trình front-end. Hiện tại, tôi đang phát triển giao diện người dùng (front-end) cho một trang web bán máy tính, tập trung vào thiết kế trải nghiệm người dùng và bố cục sản phẩm.`,
            project2Title: 'Ứng dụng Quản lý Sách',
            project2Desc: `Tôi đã phát triển một ứng dụng Windows Forms bằng C# để xây dựng giao diện người dùng cho một cửa hàng sách. Ứng dụng này cho phép người dùng duyệt sản phẩm, xem thông số kỹ thuật và mô phỏng trải nghiệm mua hàng. Dự án tập trung vào thiết kế giao diện người dùng (UI/UX) và đóng vai trò như một nguyên mẫu cho phiên bản máy tính để bàn của một trang web thương mại điện tử.`,
            projectLink: 'Xem chi tiết!',
            myCvVn: 'CV của tôi (Tiếng Việt)',
            myCvEng: 'CV của tôi (Tiếng Anh)',
            footerText: '&copy; 2025 Nguyễn Đức Long. Đã đăng ký bản quyền.',
        },
        en: {
            siteSlogan: 'Programmer & Game Developer',
            aboutMeTitle: 'About Me',
            introRole: 'Student & Game Programmer',
            introDesc: `I'm a student at Vietnam National University of Agriculture, majoring in Software Technology.<br>
                        I'm passionate about programming, especially game development and user experience.<br>
                        I'm always looking for internship opportunities and projects to learn and contribute to the tech community.`,
            skillsTitle: 'Skills',
            programmingLanguages: 'Programming Languages',
            frontEnd: 'Front-End',
            backEndDb: 'Back-End & Database',
            toolsSoftSkills: 'Tools & Soft Skills',
            teamwork: 'Teamwork',
            communication: 'Communication',
            projectsTitle: 'Featured Projects',
            project1Title: 'Computer Website',
            project1Desc: `I developed and designed a website using HTML, CSS, JavaScript, and Bootstrap, hosted on GitHub Pages, to practice my front-end programming skills. I'm currently working on the user interface (front-end) for a computer sales website, focusing on user experience design and product layout.`,
            project2Title: 'Book Management App',
            project2Desc: `I developed a Windows Forms application using C# to create a user interface for a bookstore. The app allows users to browse products, view specifications, and simulate a shopping experience. This project focuses on UI/UX design and serves as a prototype for a desktop version of an e-commerce website.`,
            projectLink: 'Check it out!',
            myCvVn: 'My CV Vietnamese',
            myCvEng: 'My CV English',
            footerText: '&copy; 2025 Nguyễn Đức Long. All rights reserved.',
        }
    };
    
    // DOM elements
    const langSelect = document.getElementById('lang-select');

    // Function to update the page content based on the selected language
    const updateContent = (lang) => {
        const data = content[lang];
        
        // Header
        document.querySelector('.site-slogan').innerHTML = data.siteSlogan;
        document.querySelector('a[href="mycvvn.html"]').innerHTML = data.myCvVn;
        document.querySelector('a[href="mycveng.html"]').innerHTML = data.myCvEng;
        
        // About section
        document.querySelector('#about .section-title').innerHTML = data.aboutMeTitle;
        document.querySelector('.intro-role').innerHTML = data.introRole;
        document.querySelector('.intro-desc').innerHTML = data.introDesc;
        
        // Skills section
        document.querySelector('#skills .section-title').innerHTML = data.skillsTitle;
        document.querySelector('.skill-group:nth-child(1) h3').innerHTML = data.programmingLanguages;
        document.querySelector('.skill-group:nth-child(2) h3').innerHTML = data.frontEnd;
        document.querySelector('.skill-group:nth-child(3) h3').innerHTML = data.backEndDb;
        document.querySelector('.skill-group:nth-child(4) h3').innerHTML = data.toolsSoftSkills;
        document.querySelector('.skill-badge:nth-last-child(2)').innerHTML = `<i class="fas fa-users"></i> ${data.teamwork}`;
        document.querySelector('.skill-badge:last-child').innerHTML = `<i class="fas fa-comments"></i> ${data.communication}`;
        
        // Projects section
        document.querySelector('#projects .section-title').innerHTML = data.projectsTitle;
        document.querySelector('.project-card:nth-child(1) h3').innerHTML = data.project1Title;
        document.querySelector('.project-card:nth-child(1) .project-desc').innerHTML = data.project1Desc;
        document.querySelector('.project-card:nth-child(1) .project-link').innerHTML = data.projectLink;
        document.querySelector('.project-card:nth-child(2) h3').innerHTML = data.project2Title;
        document.querySelector('.project-card:nth-child(2) .project-desc').innerHTML = data.project2Desc;
        document.querySelector('.project-card:nth-child(2) .project-link').innerHTML = data.projectLink;
        
        // Footer
        document.querySelector('.footer-content span:first-child').innerHTML = data.footerText;
    };
    
    // Add event listener to the dropdown menu
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateContent(selectedLang);
    });

    // Set default language on page load
    updateContent('default');
});