/**
 * LCEO CMS Core - Dynamic Content Manager
 * Handles data persistence and dynamic rendering across the site.
 */

const LCEO_DATA_KEY = 'lceo_cms_data';

// Initial Data Structure
const initialData = {
    siteSettings: {
        heroTitle: "Unlocking Potential, Empowering lives",
        heroSubtitle: "Transforming the lives of vulnerable young women and girls in Rwanda.",
        mission: "To walk alongside girls and women as they heal, grow and thrive- through mindset shift and mental resilience, education and economic empowered.",
        vision: "A Society where young women and girls are mentally strong, Educated and economically empowered- free to lead and thrive.",
        email: "info@lceo.org",
        phone: "+250 888 888 888",
        address: "Bugesera District, Rwanda",
        social: {
            twitter: "#",
            facebook: "#",
            instagram: "#"
        }
    },
    stats: [
        { label: "Women & Girls", value: 5000, suffix: "Reached & Empowered" },
        { label: "Education", value: 1200, suffix: "Girls stayed in school" },
        { label: "Livelihoods", value: 450, suffix: "Businesses launched" },
        { label: "Leadership", value: 300, suffix: "Change Champions trained" }
    ],
    programs: [
        {
            id: 'p1',
            title: "Girls’ School Retention & Protection",
            category: "Education Initiative",
            description: "Pad Box Initiative, School Facilitation, and Girls' Safe Spaces to ensure education access.",
            image: "images/cause-1.jpg",
            raised: 15000,
            target: 20000,
            published: true
        },
        {
            id: 'p2',
            title: "IkiraroBiz – Skills & Entrepreneurship",
            category: "Entrepreneurship",
            description: "A graduation approach helping beneficiaries transition from dependence to self-sufficiency through skills.",
            image: "images/cause-2.jpg",
            raised: 8500,
            target: 15000,
            published: true
        },
        {
            id: 'p3',
            title: "Human Capital & Mental Resilience",
            category: "Health & Wellness",
            description: "Prioritizing mindset shift and mental health as foundations for lasting transformation and growth.",
            image: "images/cause-3.jpg",
            raised: 12000,
            target: 25000,
            published: true
        }
    ],
    stories: [
        {
            id: 's1',
            title: "Transforming Lives in Bugesera",
            excerpt: "A deep dive into local impact and the journey of our beneficiaries...",
            image: "images/image_1.jpg",
            author: "Admin",
            date: "Oct 12, 2023",
            published: true
        }
    ],
    team: [
        {
            name: "Jane Doe",
            role: "Executive Director",
            image: "images/person_1.jpg",
            bio: "Dedicated to mission of LCEO."
        }
    ],
    events: [
        {
            id: 'e1',
            title: "World Wide Donation",
            date: "Sep. 10, 2018",
            time: "10:30AM-03:30PM",
            location: "Venue Main Campus",
            image: "images/event-1.jpg",
            description: "A community gathering to support our local initiatives.",
            published: true
        }
    ],
    partners: [
        { name: "FAWE RWANDA", link: "fawe.org.rw" },
        { name: "ECORYS", link: "#" },
        { name: "PLAN INTERNATIONAL", link: "#" }
    ],
    gallery: [
        "images/cause-1.jpg",
        "images/cause-2.jpg",
        "images/cause-3.jpg",
        "images/cause-4.jpg",
        "images/cause-5.jpg",
        "images/cause-6.jpg"
    ],
    donations: [
        {
            id: 'd1',
            donorName: "Ivan Jacobson",
            amount: 300,
            paymentMethod: "Bank Card",
            date: "2024-02-05 10:00:00",
            status: "Completed",
            cause: "Children Needs Food"
        }
    ]
};

// Data Management Functions
const CMS = {
    init: function () {
        if (!localStorage.getItem(LCEO_DATA_KEY)) {
            localStorage.setItem(LCEO_DATA_KEY, JSON.stringify(initialData));
        }
    },
    getData: function () {
        return JSON.parse(localStorage.getItem(LCEO_DATA_KEY));
    },
    saveData: function (data) {
        localStorage.setItem(LCEO_DATA_KEY, JSON.stringify(data));
        // Optional: Trigger event for other tabs
        window.dispatchEvent(new Event('cms-update'));
    },

    // UI Rendering Helpers
    renderAll: function () {
        try {
            const data = this.getData();
            if (!data) return;

            this.renderSiteSettings(data.siteSettings);
            this.renderStats(data.stats);
            this.renderPrograms(data.programs);
            this.renderStories(data.stories);
            this.renderEvents(data.events);
            this.renderPartners(data.partners);
            this.renderGallery(data.gallery);
            this.renderFooter(data.siteSettings);
            this.renderRecentDonations(data.donations || []);
        } catch (e) {
            console.error("CMS Render Error:", e);
        }
    },

    addDonation: function (donation) {
        const data = this.getData();
        if (!data.donations) data.donations = [];
        const newDonation = {
            id: 'd' + Date.now(),
            date: new Date().toLocaleString(),
            status: 'Completed',
            ...donation
        };
        data.donations.unshift(newDonation);
        this.saveData(data);
        return newDonation;
    },

    getDonations: function () {
        return this.getData().donations || [];
    },

    renderRecentDonations: function (donations) {
        const $table = $('#donations-table-body');
        const $totalStat = $('#total-donations-stat');

        let total = 0;
        donations.forEach(d => total += parseFloat(d.amount));

        if ($totalStat.length) {
            $totalStat.text('$' + (total).toLocaleString());
        }

        if (!$table.length) return;

        let html = '';
        if (donations.length === 0) {
            html = '<tr><td colspan="5" class="text-center text-muted">No donations yet</td></tr>';
        } else {
            donations.slice(0, 10).forEach(d => {
                html += `
                    <tr>
                        <td>${d.donorName}</td>
                        <td>$${d.amount}</td>
                        <td><span class="badge badge-${this.getPaymentMethodClass(d.paymentMethod)}">${d.paymentMethod}</span></td>
                        <td><small>${d.date}</small></td>
                        <td><span class="badge badge-success">Completed</span></td>
                    </tr>`;
            });
        }
        $table.html(html);
    },

    getPaymentMethodClass: function (method) {
        method = method.toLowerCase();
        if (method.includes('momo')) return 'warning';
        if (method.includes('card')) return 'primary';
        if (method.includes('bank')) return 'success';
        return 'secondary';
    },

    renderSiteSettings: function (settings) {
        $('[data-cms="heroTitle"]').text(settings.heroTitle);
        $('[data-cms="heroSubtitle"]').text(settings.heroSubtitle);
        $('[data-cms="mission"]').text(settings.mission);
        $('[data-cms="vision"]').text(settings.vision);
        $('[data-cms="email"]').text(settings.email).attr('href', 'mailto:' + settings.email);
        $('[data-cms="phone"]').text(settings.phone).attr('href', 'tel:' + settings.phone.replace(/\s/g, ''));
        $('[data-cms="address"]').text(settings.address);
    },

    renderStats: function (stats) {
        const containers = $('.counter-wrap');
        stats.forEach((stat, index) => {
            if (containers[index]) {
                const $container = $(containers[index]);
                $container.find('span:first').text(stat.label);
                $container.find('.number').attr('data-number', stat.value).text(stat.value);
                $container.find('span:last').text(stat.suffix);
            }
        });
    },

    renderPrograms: function (programs) {
        const $carousel = $('.carousel-cause');
        const $grid = $('#programs-grid');

        if ($carousel.length || $grid.length) {
            let html = '';
            programs.filter(p => p.published).forEach(p => {
                const percent = Math.round((p.raised / p.target) * 100);
                html += `
                    <div class="item ${$grid.length ? 'col-md-4 mb-4' : ''}">
                        <div class="cause-entry">
                            <a href="how-we-work.html" class="img" style="background-image: url(${p.image});"></a>
                            <div class="text p-3 p-md-4 text-center">
                                <h3><a href="how-we-work.html">${p.title}</a></h3>
                                <p>${p.description}</p>
                                <div class="progress custom-progress-success mb-3">
                                    <div class="progress-bar bg-primary" role="progressbar" style="width: ${percent}%" 
                                        aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="fund-raised d-block mb-3">$${p.raised.toLocaleString()} raised of $${p.target.toLocaleString()}</span>
                                <p><a href="#" data-toggle="modal" data-target="#donationModal" class="btn btn-primary px-3 py-2">Donate Now</a></p>
                            </div>
                        </div>
                    </div>`;
            });

            if ($carousel.length) {
                if ($carousel.data('owl.carousel')) {
                    $carousel.trigger('replace.owl.carousel', html).trigger('refresh.owl.carousel');
                } else {
                    $carousel.html(html);
                }
            }
            if ($grid.length) {
                $grid.html(html);
            }
        }
    },

    renderStories: function (stories) {
        const $container = $('#stories-container');
        if (!$container.length) return;

        let html = '';
        stories.filter(s => s.published).forEach(s => {
            html += `
                <div class="col-md-4 d-flex">
                    <div class="blog-entry align-self-stretch">
                        <a href="blog-single.html" class="block-20" style="background-image: url('${s.image}');"></a>
                        <div class="text p-4 d-block">
                            <div class="meta mb-3">
                                <div><a href="#">${s.date}</a></div>
                                <div><a href="#">${s.author}</a></div>
                            </div>
                            <h3 class="heading mt-3"><a href="#">${s.title}</a></h3>
                            <p>${s.excerpt}</p>
                        </div>
                    </div>
                </div>`;
        });
        $container.html(html);
    },

    renderEvents: function (events) {
        const $container = $('#events-container');
        if (!$container.length) return;

        let html = '';
        events.filter(e => e.published).forEach(e => {
            html += `
                <div class="col-md-4 d-flex">
                    <div class="blog-entry align-self-stretch">
                        <a href="blog-single.html" class="block-20" style="background-image: url('${e.image}');"></a>
                        <div class="text p-4 d-block">
                            <div class="meta mb-3">
                                <div><a href="#">${e.date}</a></div>
                            </div>
                            <h3 class="heading mb-4"><a href="#">${e.title}</a></h3>
                            <p class="time-loc"><span class="mr-2"><i class="icon-clock-o"></i> ${e.time}</span> <span><i class="icon-map-o"></i> ${e.location}</span></p>
                            <p>${e.description}</p>
                            <p><a href="event.html">Join Event <i class="ion-ios-arrow-forward"></i></a></p>
                        </div>
                    </div>
                </div>`;
        });
        $container.html(html);
    },

    renderPartners: function (partners) {
        const $container = $('#partners-container');
        if (!$container.length) return;

        let html = '';
        partners.forEach(p => {
            html += `
                <div class="col-md-4 col-sm-6 text-center">
                    <div class="partner-item p-4">
                        <h4 style="color: #4FB1A1; font-weight: bold;">${p.name}</h4>
                    </div>
                </div>`;
        });
        $container.html(html);
    },

    renderGallery: function (gallery) {
        const $container = $('#gallery-container');
        if (!$container.length) return;

        let html = '';
        gallery.forEach(img => {
            html += `
                <div class="col-md-3 mb-4">
                    <a href="${img}" class="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate" style="background-image: url(${img}); height: 250px;">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="icon-search"></span>
                        </div>
                    </a>
                </div>`;
        });
        $container.html(html);

        if ($.fn.magnificPopup) {
            $('.image-popup').magnificPopup({
                type: 'image',
                gallery: { enabled: true }
            });
        }
    },

    renderFooter: function (settings) {
        $('.ftco-footer [data-cms="mission"]').text(settings.mission);
        $('.ftco-footer [data-cms="address"]').text(settings.address);
        $('.ftco-footer [data-cms="phone"]').text(settings.phone);
        $('.ftco-footer [data-cms="email"]').text(settings.email);
    }
};

// Auto-initialize on every page
$(document).ready(function () {
    CMS.init();
    CMS.renderAll();
});
