$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'SAATHI COUNSELLING CELL',
      tag: 'Secretary: Vinay',
      detail:
        "In the fast pacing lives of todays world, we care about our body but we often ignore our mental health which is equally important. Unless our mind will not be healthy, no work can be properly done. Keeping this idea in mind and for the betterment of the students' of this campus and beyond, this cell provides all the mental and emotional support needed by the people around.</p><p> The cell consists of four professional counsellors along with a group of enthusiast students who are always eager to help the needy.",
      //link: 'https://www.iitg.ac.in/stud/gymkhana/welfareBoard/clubs/saathi/counsellors.html'
    },
    ordering: {
      title: 'YOUTH EMPOWERMENT CLUB',
      tag: 'Secretary: Ikya Venus',
      detail:
        'The Youth Empowerment Club engages youth in positive activities during the hours that they are most likely to be involved in the negative lures of their communities. The program of the club is designed to help students build self-esteem, enhance communication, manage anger and violent expression, enhance decision making skills, become independent thinkers and create positive relationships with others',
      //link: 'https://www.iitg.ac.in/stud/gymkhana/welfareBoard/clubs/youth.html'
    },
    newrelic: {
      title: 'RED RIBBON CLUB',
      tag: 'Secretary: Bonitha Yurembam',
      detail:
        'Red Ribbon Club focuses on the well-being of people of the campus and helps spread awareness about the diseases like HIV-AIDS, STI and other related issues thus eliminating the misconceptions. It also focuses on blood donation drives and thus helping thousands of needy. ',
      //link: 'https://www.iitg.ac.in/stud/gymkhana/welfareBoard/clubs/redribbon.html'
    },
    roambi: {
      title: 'SOCIAL SERVICE CLUB',
      tag: 'Secretary: Shreyas Meena',
      detail:
        'Social Service Club IITG carries its works in the institute as a part of the public service initiative taken up by the institute .The aim being to inculcate social welfare thoughts in students who are the future of our nation and carry out actions reflecting the same without any prejudice.',
      //link: 'https://www.iitg.ac.in/stud/gymkhana/welfareBoard/clubs/social.html'
    },
    walker: {
      title: 'ACADEMIC INITIATIVE CLUB',
      tag: 'Secretary: Rutviz Bhosle',
      detail:
        'This club mainly focuses on helping the students who are not able to perform to their capacity because of different reasons like language, or difficulty in grasping the concepts. Along with these, this club also aims at helping people preparing for various exams.'
    },

    mystand: {
      title: 'RIGHTS AND RESPONSIBILITIES CLUB',
      tag: 'Secretary: Ashutosh Gupta',
      detail:
        'This club is responsible for Advising the board and simulating efforts for preserving and creating awareness about human rights of campus residents, including issues of ragging, harassment, and discrimination.',
      //link: 'https://www.iitg.ac.in/stud/gymkhana/welfareBoard/clubs/rights.html'
    },
  
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
