There are 3 different processes we’re using to put together this documentation, all of which could potentially be included in an automatic build process.  Those processes are:

1)	Open API Specification (currently being put together by hand, but might be generatable from the source code depending on how it is documented)
2)	Widdershins – Open API Spec-to-Markdown converter (our fork: https://github.com/HStockerSOI/widdershins)
3)	Slate – Ruby program to produce HTML5 from Markdown  (our fork: https://github.com/HStockerSOI/slate)

Combining these three technologies we have been able to put together a workflow that will generate documentation from the json Open API spec.  There has been a decent amount of hand crafted documentation for the introduction and REST tutorial, however the meat of the documentation is primarily generated and is in a separate file that can be swapped out without having to recreate the hand crafted portions.  I have been tailoring both Widdershins and Slate to the specific documentation we’re trying to create.  You will be able to view my updates as I push them to the repository. 

There are a few technologies that are involved in this workflow.  Working on a Windows 10 machine, I have installed:

1)	A clone of Slate (see ReadMe for install instructions: https://github.com/HStockerSOI/slate) 
2)	A clone of Widdershins (see ReadMe for install instructions: https://github.com/HStockerSOI/widdershins) 
3)	Ruby 2.4.4 with DevKit (https://rubyinstaller.org/downloads/) 
4)	Nodejs (https://nodejs.org/en/)

The Markdown that Slate consumes is a fairly simple syntax that can hopefully be learned and updated by a non-technical employee:
-	https://github.com/lord/slate/wiki/Markdown-Syntax 

The ruby installation is relative to the environment, so what worked for me may not be the best way for another operating system or version of Windows.  Once you have these environments set up, you’ll run the following commands (on the command prompt in their respective folders):

1)	An Open API specification document should be generated either by hand or automatically.  This will be used as the input file in the following step.
2)	With the command prompt in the Widdershins folder run: node widdershins -o <OutputFileName> <InputFileName>
3)	Copy the output file into the Include folder under “Slate/Source/Includes” (if necessary, overwrite the existing file)
4)	With the command prompt in the Slate folder run: Bundle exec middleman build
5)	The resulting HTML documents will be put into the “Slate/Build” folder which should be pushed to the “CAQH.github.io” repository

I can put together a more detailed walkthrough of our process once we get it more concretely defined, hopefully after the upcoming demo next week.  Feel free to reach out if you have any questions or concerns about the technologies or work flow.

Thanks,
Hank
