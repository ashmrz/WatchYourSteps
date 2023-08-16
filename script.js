
var VIDEO_ASPECT_RATIO = 16.0 / 9.0;

var bearTextStrings = [
  "Original NeRF",
  "<em>\"Turn the bear into a grizzly bear\"</em>",
  "<em>\"Turn the bear into a polar bear\"</em>",
  "<em>\"Turn the bear into a panda\"</em>",
];

var faceTextStrings = [
  "Original NeRF",
  "<em>\"Turn him into Albert Einstein\"</em>",
  "<em>\"Turn him into Heath Ledger's joker\"</em>",
  "<em>\"Give him a mustache\"</em>",
  "<em>\"Turn his face into a bronze statue\"</em>",
];

var faceRelevanceTextStrings = [
  "<em>\"Give him blonde hair\"</em>",
  "<em>\"Give him a mustache\"</em>",
  "<em>\"Put him in front of a green wall\"</em>",
  "<em>\"Give him sunglasses\"</em>",
]

var bearRelevanceTextStrings = [
  "<em>\"Turn the bear into a grizzly bear\"</em>",
  "<em>\"Turn the bear into a panda\"</em>",
]

var fangTextStrings = [
  "Original NeRF",
  "<em>\"Give him blue hair\"</em>",
  "<em>\"Turn him into the Tolkien Elf\"</em>",
];

$("#bear-video-in2n").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_bear_idx = 0;
    current_face_idx = 0;
    current_fang_idx = 0;
    current_face_relevance_idx = 0;
    current_bear_relevance_idx = 0;

    bearVideoIn2n = document.getElementById('bear-video-in2n');
    bearVideoOurs = document.getElementById('bear-video-ours');
    bearText = document.getElementById('bear-text');

    bearThumbnails = [
        document.getElementById('original-bear'),
        document.getElementById('grizzly'),
        document.getElementById('polar'),
        document.getElementById('panda'),
    ];
    for (var i = 0; i < bearThumbnails.length; i++) {
        bearThumbnails[i].addEventListener('click', change_bear_index.bind(this, i));
    }
    change_bear_index(current_bear_idx);




    fangVideoIn2n = document.getElementById('fang-video-in2n');
    fangVideoOurs = document.getElementById('fang-video-ours');
    fangText = document.getElementById('fang-text');

    fangThumbnails = [
        document.getElementById('fang-original'),
        document.getElementById('fang-blue'),
        document.getElementById('fang-elf'),
    ];
    for (var i = 0; i < fangThumbnails.length; i++) {
        fangThumbnails[i].addEventListener('click', change_fang_index.bind(this, i));
    }
    change_fang_index(current_fang_idx);




    faceVideoIn2n = document.getElementById('face-video-in2n');
    faceVideoOurs = document.getElementById('face-video-ours');
    faceText = document.getElementById('face-text');

    faceThumbnails = [
        document.getElementById('original-face'),
        document.getElementById('einstein'),
        document.getElementById('joker'),
        document.getElementById('mustache'),
        document.getElementById('bronze'),
    ];
    for (var i = 0; i < faceThumbnails.length; i++) {
        faceThumbnails[i].addEventListener('click', change_face_index.bind(this, i));
    }
    change_face_index(current_face_idx);




    faceRelevanceVideoMain = document.getElementById('face-relevance-video-main');
    faceRelevanceVideo = document.getElementById('face-relevance-video');
    faceRelevanceText = document.getElementById('face-relevance-text');

    faceRelevanceThumbnails = [
        document.getElementById('relevance-blonde'),
        document.getElementById('relevance-mustache'),
        document.getElementById('relevance-green'),
        document.getElementById('relevance-sunglasses'),
    ];
    for (var i = 0; i < faceRelevanceThumbnails.length; i++) {
        faceRelevanceThumbnails[i].addEventListener('click', change_face_relevance_index.bind(this, i));
    }
    change_face_index(current_face_relevance_idx);




    bearRelevanceVideoMain = document.getElementById('bear-relevance-video-main');
    bearRelevanceVideo = document.getElementById('bear-relevance-video');
    bearRelevanceText = document.getElementById('bear-relevance-text');

    bearRelevanceThumbnails = [
        document.getElementById('relevance-grizzly'),
        document.getElementById('relevance-panda'),
    ];
    for (var i = 0; i < bearRelevanceThumbnails.length; i++) {
        bearRelevanceThumbnails[i].addEventListener('click', change_bear_relevance_index.bind(this, i));
    }
    change_bear_index(current_bear_relevance_idx);

  });
  
function change_bear_index (idx) {
    bearThumbnails[idx].classList.add("active-btn");
    if (current_bear_idx != idx) {
        bearThumbnails[current_bear_idx].classList.remove("active-btn");
    }
    current_bear_idx = idx;
    bearText.innerHTML = bearTextStrings[idx];

    bearVideoIn2n.src = "data/videos/bear-" + bearThumbnails[idx].id + "-in2n.mp4";
    bearVideoIn2n.load();

    bearVideoOurs.src = "data/videos/bear-" + bearThumbnails[idx].id + "-ours.mp4";
    bearVideoOurs.load();
}

function change_face_index (idx) {
    faceThumbnails[idx].classList.add("active-btn");
    if (current_face_idx != idx) {
        faceThumbnails[current_face_idx].classList.remove("active-btn");
    }
    current_face_idx = idx;
    faceText.innerHTML = faceTextStrings[idx];

    faceVideoIn2n.src = "data/videos/face-" + faceThumbnails[idx].id + "-in2n.mp4";
    faceVideoIn2n.load();

    faceVideoOurs.src = "data/videos/face-" + faceThumbnails[idx].id + "-ours.mp4";
    faceVideoOurs.load();
}

function change_fang_index (idx) {
    fangThumbnails[idx].classList.add("active-btn");
    if (current_fang_idx != idx) {
        fangThumbnails[current_fang_idx].classList.remove("active-btn");
    }
    current_fang_idx = idx;
    fangText.innerHTML = fangTextStrings[idx];

    fangVideoIn2n.src = "data/videos/" + fangThumbnails[idx].id + "-in2n.mp4";
    fangVideoIn2n.load();

    fangVideoOurs.src = "data/videos/" + fangThumbnails[idx].id + "-ours.mp4";
    fangVideoOurs.load();
}



function change_face_relevance_index (idx) {
    faceRelevanceThumbnails[idx].classList.add("active-btn");
    if (current_face_idx != idx) {
        faceRelevanceThumbnails[current_face_relevance_idx].classList.remove("active-btn");
    }
    current_face_idx = idx;
    faceRelevanceText.innerHTML = faceRelevanceTextStrings[idx];

    faceRelevanceVideo.src = "data/videos/radiance-face-" + faceRelevanceThumbnails[idx].id + ".mp4";
    faceRelevanceVideo.load();
    faceRelevanceVideoMain.load();

}


function change_bear_relevance_index (idx) {
    faceRelevanceThumbnails[idx].classList.add("active-btn");
    if (current_bear_idx != idx) {
        bearRelevanceThumbnails[current_bear_relevance_idx].classList.remove("active-btn");
    }
    current_bear_idx = idx;
    bearRelevanceText.innerHTML = bearRelevanceTextStrings[idx];

    bearRelevanceVideo.src = "data/videos/radiance-bear-" + bearRelevanceThumbnails[idx].id + ".mp4";
    bearRelevanceVideo.load();
    bearRelevanceVideoMain.load();

}