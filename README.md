# Minimal Issue Reproduction

Starting in yeoman-generator 8.0.0, supplying `globOptions` to a call to `copy` causes the destination path to include an extra directory. This example generator attempts to copy a file named `source.txt` to `dest.txt`, but it ends up writing it to the path `dest.txt/source.txt` (i.e. the destination path is always interpreted as a directory, instead of a file name).
