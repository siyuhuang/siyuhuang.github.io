{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // assets/js/filter.js\
\
document.addEventListener('DOMContentLoaded', function() \{\
    const filterContainer = document.querySelector('.publication-filters');\
    if (!filterContainer) return; // \uc0\u22914 \u26524 \u39029 \u38754 \u19978 \u27809 \u26377 \u31579 \u36873 \u22120 \u65292 \u21017 \u19981 \u25191 \u34892 \u20219 \u20309 \u25805 \u20316 \
\
    const filterBtns = filterContainer.querySelectorAll('.filter-btn');\
    const pubItems = document.querySelectorAll('.pub-item');\
\
    filterBtns.forEach(btn => \{\
        btn.addEventListener('click', function(e) \{\
            e.preventDefault(); // \uc0\u38459 \u27490 \u38142 \u25509 \u30340 \u40664 \u35748 \u36339 \u36716 \u34892 \u20026 \
\
            // \uc0\u31649 \u29702 \u25353 \u38062 \u30340 \u28608 \u27963 \u29366 \u24577 \
            filterContainer.querySelector('.filter-btn.active').classList.remove('active');\
            this.classList.add('active');\
\
            const filter = this.getAttribute('data-filter');\
\
            pubItems.forEach(item => \{\
                // \uc0\u22914 \u26524 \u31579 \u36873 \u22120 \u26159  'all' \u25110 \u32773 \u35770 \u25991 \u26465 \u30446 \u21253 \u21547 \u35813 \u31579 \u36873 \u22120 \u30340  class\u65292 \u21017 \u26174 \u31034 \
                if (filter === 'all' || item.classList.contains(filter)) \{\
                    item.style.display = ''; // \uc0\u24674 \u22797 \u40664 \u35748 \u26174 \u31034 \
                \} else \{\
                    item.style.display = 'none'; // \uc0\u38544 \u34255 \
                \}\
            \});\
        \});\
    \});\
\});}