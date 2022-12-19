const quotes=[
    {
        quote:"“게으른 자는 늘 하고 싶은 것이 있다고 말만 하고 하지 않는다”",
        author:"실천의 열쇠는 바로 우리!😙",
    },

    {
        quote:"“물질적인 가난, 마음의 가난이 당신의 나태함에서 오지 않았는가 생각해 보라”",
        author:"항상 좋은 생각과 긍정적인 생각을 곁들여 나태함에서 벗어나 우리 모두 부자되어요!🎁",
    },

    {
        quote:"“문제를 통해 나는 더 강해진다”",
        author:"살다보면 내가 어쩔 수 없는 일 때문에 힘들어지곤 하지만, 그 일의 의미에 대한 '해석 능력'은 나에게 있습니다🎭",
    },

    {
        quote:"“우리 모두는 인생의 인턴이다”",
        author:"자만하지 말고, 겸손한 태도를 장착하여 과거의 경험으로 다가올 날들을 판단하지 말고 새로운 시각으로 새로운 시도를 해보는건 어떨까요?😏",
    },
    {
        quote:"“웃음은 그 자체로 건강하다”",
        author:"우리 오늘도 마음껏 웃어요!🤭",
    },
    {
        quote:"“웃으면 유쾌해지고 화를 내면 불쾌해지는 게 바로 실수이다”",
        author:"살면서 실수는 누구나 경험합니다 실수를 원동력으로 더 나은 자신을 만들어보아요!👓",
    },
    {
        quote:"“인생의 실패자들은 포기할 때 자신이 성공에 얼마나 가까이 있었는지 모른다”",
        author:"꺾이지 않는 마음이 중요하죠! 우리 모두 끝까지 노력해보아요🥇",
    },
    {
        quote:"“인간이 깨닫기 힘든 것이 있다. 움직이는 것보다 가만히 있는 것이 더 피곤하단 사실이다”",
        author:"실행하지 않고 누워서 걱정과 고민으로 둘러쌓여 있는 상황이 더 힘들죠 지금 당장 일어납시다!😉",
    },
    {
        quote:"“게으른 자에게 기회란 없다. 기회란 움직이는 자에게만 찾아오는 것이다”",
        author:"대비해서 나쁠건 없잖아요? 우리 기회 잡아야죠😁",
    },
    {
        quote:"“오늘의 나는 내가 결정한다”",
        author:"좋은 생각, 좋은 마음, 우리 꽤 행복하잖아요🥰",
    },
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;