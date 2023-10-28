# -- GENERAL

# Project name
NAME= spaminifier

# Source files
SRC_DIR= # in case your cpp files are in a folder like src/
SRC_FILES=	main.cpp \
					obfuscate.cpp
INC_DIR= include/

# Obj files
OBJS= $(SRC_FILES:.cpp=.o)

# Output directory
BIN_DIR= bin/
OBJ_DIR= obj/


# -- LINKER OPTIONS
LIB_DIR= lib/
LIBS=			
LDFLAGS= $(addprefix -L, $(LIB_DIR)) \
					$(addprefix -l, $(LIBS))


# -- COMPILER OPTIONS
CXX= g++
CXXFLAGS= -std=gnu++17 -Wall -O2
CXXFLAGS+= $(addprefix -I, $(INC_DIR))



# -- RULES

All: binclean $(OBJS)
	$(CXX) -o $(NAME) $(OBJS) $(LDFLAGS)

# Rule to compile every .c file into .o
$(OBJS): %.o: %.cpp
	$(CXX) -o $@ -c $< $(CXXFLAGS)

# Remove all obj files
clean:
	rm -rf $(OBJ_DIR)
	rm -rf $(SRC_DIR)

# Remove all obj files and the binary
binclean:
	rm -rf bin
	mkdir -p bin
	mkdir -p lib

# Describe all the rules who do not directly create a file
.PHONY: clean binclean