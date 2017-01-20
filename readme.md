Project - browse the star wars charachters listing API
I approached this by doing an infinte load with an infinite scroll style system.
Given this is a project as small as this it seemed reasonable to attempt this
even though i haven't done it before (i was looking at facebook and that was an
  inspiration to try something different honestly).

Working on webpack deployment after mentioning from Robert at the interview,
I got some parts of it working properly but was running into some issues that
are difficult to resolve, i would have loved a bit more time to spend to resolve
these but i think it has something to do with a choice i made on constructing
the project with one of the packages.

I kept the component count low on this because I was attempting to get the
AirBNB styleguide put in place.  I resolved most issues with this and can be
run by using 'npm run build'. All possible notes were taken however it now
is giving breaking changes as updates for style. - this took more time to
get into the style guide than i anticpated honestly, i haven't worked with this
strict of a style guide previously. This also is preventing webpack from being
able to run properly since i added linting as part of the build process with
webpack.

I did some basic css styling which i would have loved to extended upon and figured
something more attractive out, i used some simple stock '.css' files since
it is faster to setup easily.

I wired in router even though it was not utilized, honestly i wasn't sure if
i would have ended up using it or not originally.  I know this may have been slightly over
engineered however i find it so commonly used it didn't seem like a crazy thing
to include in the base react system.  I used an external API middleware to save
some time from writing my own as i prefer to not have extra files filled with
Api calls and makes an action much easier if handing an API to understand in
the actions section of code.
I also used some basic logic to use the same action in the component for inital
and subsequent loads, using the existance of the next link type fetched from the
api.  I have built pagination systems that hold each page in a seperate object,
i chose to not do that as a smarter system to keep my components lean for this
project with the approach i worked on.

I seperated some files more than was needed for a project this small but i do
like to seperate concerns that i have about where code exists.

There is one glaring ommision from this i feel terrible about and that is to do
testing.  Honestly tests would be about 2-3 hrs more work on this project, the
files are in an easily unit testable state currently.
